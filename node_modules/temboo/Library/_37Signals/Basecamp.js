
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CompleteEntry
    Marks a specific calendar entry as completed.
*/


var CompleteEntry = function(session) {
    /*
        Create a new instance of the CompleteEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CompleteEntry"
    CompleteEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompleteEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompleteEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompleteEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompleteEntryInputSet = function() {
    CompleteEntryInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, integer) The ID for the calendar entry to mark as completed.)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project with the calendar entry to mark as completed.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompleteEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompleteEntryResultSet = function(resultStream) {
    CompleteEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompleteEntry, choreography.Choreography);
util.inherits(CompleteEntryInputSet, choreography.InputSet);
util.inherits(CompleteEntryResultSet, choreography.ResultSet);
exports.CompleteEntry = CompleteEntry;


/*
    CompleteItem
    Marks a single, specified item in a To-do list as complete.
*/


var CompleteItem = function(session) {
    /*
        Create a new instance of the CompleteItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CompleteItem"
    CompleteItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CompleteItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CompleteItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CompleteItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CompleteItemInputSet = function() {
    CompleteItemInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, integer) The ID of the item to mark as complete.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CompleteItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CompleteItemResultSet = function(resultStream) {
    CompleteItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (There is no structrued response from complete item requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CompleteItem, choreography.Choreography);
util.inherits(CompleteItemInputSet, choreography.InputSet);
util.inherits(CompleteItemResultSet, choreography.ResultSet);
exports.CompleteItem = CompleteItem;


/*
    CreateEntry
    Creates a new calendar entry in a specified project.
*/


var CreateEntry = function(session) {
    /*
        Create a new instance of the CreateEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CreateEntry"
    CreateEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateEntryInputSet = function() {
    CreateEntryInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) The date the entry ends, in YYYY-MM-DD format. This is the same as StartDate for one-day entries.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project in which to create the new entry.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the ResponsibleParty input for this Choreo. ((optional, any) The user ID or company ID (preceded by a “c”, as in "c1234") to assign the entry to. Applies only to "Milestone" entry types.)
        */
        this.set_ResponsibleParty = function(value) {
            this.setInput("ResponsibleParty", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((required, date) The date the entry starts, in YYYY-MM-DD format.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title for the calendar entry to create.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((required, string) The type of calendar entry to create, either "Milestone" or "CalendarEvent" (the default).)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateEntryResultSet = function(resultStream) {
    CreateEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateEntry, choreography.Choreography);
util.inherits(CreateEntryInputSet, choreography.InputSet);
util.inherits(CreateEntryResultSet, choreography.ResultSet);
exports.CreateEntry = CreateEntry;


/*
    CreateItem
    Creates a new item for a specified To-do list.
*/


var CreateItem = function(session) {
    /*
        Create a new instance of the CreateItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CreateItem"
    CreateItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateItemInputSet = function() {
    CreateItemInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Content input for this Choreo. ((required, string) The text of the item to create.)
        */
        this.set_Content = function(value) {
            this.setInput("Content", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID for the list in which to create the new item.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponsibleParty input for this Choreo. ((optional, integer) The user ID or company ID  (preceded by a “c”, as in "c1234") to assign the item to. Defaults to unassigned If left blank.)
        */
        this.set_ResponsibleParty = function(value) {
            this.setInput("ResponsibleParty", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateItemResultSet = function(resultStream) {
    CreateItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No structured response is returned from Basecamp for new item requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateItem, choreography.Choreography);
util.inherits(CreateItemInputSet, choreography.InputSet);
util.inherits(CreateItemResultSet, choreography.ResultSet);
exports.CreateItem = CreateItem;


/*
    CreateList
    Creates a new To-do list for a specified project.
*/


var CreateList = function(session) {
    /*
        Create a new instance of the CreateList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CreateList"
    CreateList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateListInputSet = function() {
    CreateListInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description of the list to create.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the MilestoneID input for this Choreo. ((optional, integer) The ID of an existing milestone to include with the new list.)
        */
        this.set_MilestoneID = function(value) {
            this.setInput("MilestoneID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) The name of the list to create.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project in which you're creating the new list.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateListResultSet = function(resultStream) {
    CreateListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No response is returned from Basecamp for update requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateList, choreography.Choreography);
util.inherits(CreateListInputSet, choreography.InputSet);
util.inherits(CreateListResultSet, choreography.ResultSet);
exports.CreateList = CreateList;


/*
    CreateMessage
    Creates a new message under a specified project.
*/


var CreateMessage = function(session) {
    /*
        Create a new instance of the CreateMessage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CreateMessage"
    CreateMessage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateMessageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateMessageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateMessage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateMessageInputSet = function() {
    CreateMessageInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Body input for this Choreo. ((required, string) The body of the message you're creating.)
        */
        this.set_Body = function(value) {
            this.setInput("Body", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectId input for this Choreo. ((required, integer) The ID of the project that the message will be created under.)
        */
        this.set_ProjectId = function(value) {
            this.setInput("ProjectId", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((required, string) The title of the message you'e creating.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateMessage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateMessageResultSet = function(resultStream) {
    CreateMessageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Basecamp. Note that a successful request returns a null result in this output variable.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateMessage, choreography.Choreography);
util.inherits(CreateMessageInputSet, choreography.InputSet);
util.inherits(CreateMessageResultSet, choreography.ResultSet);
exports.CreateMessage = CreateMessage;


/*
    CreateProject
    Creates a new Basecamp project.
*/


var CreateProject = function(session) {
    /*
        Create a new instance of the CreateProject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CreateProject"
    CreateProject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateProjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateProjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateProject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateProjectInputSet = function() {
    CreateProjectInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password. You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectName input for this Choreo. ((required, string) The name for the project you want to create.)
        */
        this.set_ProjectName = function(value) {
            this.setInput("ProjectName", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateProject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateProjectResultSet = function(resultStream) {
    CreateProjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Basecamp. Note that a successful request returns a null result in this output variable.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateProject, choreography.Choreography);
util.inherits(CreateProjectInputSet, choreography.InputSet);
util.inherits(CreateProjectResultSet, choreography.ResultSet);
exports.CreateProject = CreateProject;


/*
    CurrentPerson
    Retrieves information on the person who's credentials are specified.
*/


var CurrentPerson = function(session) {
    /*
        Create a new instance of the CurrentPerson Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/CurrentPerson"
    CurrentPerson.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CurrentPersonResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CurrentPersonInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CurrentPerson
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CurrentPersonInputSet = function() {
    CurrentPersonInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CurrentPerson Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CurrentPersonResultSet = function(resultStream) {
    CurrentPersonResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CurrentPerson, choreography.Choreography);
util.inherits(CurrentPersonInputSet, choreography.InputSet);
util.inherits(CurrentPersonResultSet, choreography.ResultSet);
exports.CurrentPerson = CurrentPerson;


/*
    DeleteEntry
    Deletes a specific calendar entry in a project you specify.
*/


var DeleteEntry = function(session) {
    /*
        Create a new instance of the DeleteEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/DeleteEntry"
    DeleteEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteEntryInputSet = function() {
    DeleteEntryInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, integer) The ID for the calendar entry to delete.)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project from which to delete the calendar entry.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteEntryResultSet = function(resultStream) {
    DeleteEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Basecamp returns no content for delete entry requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteEntry, choreography.Choreography);
util.inherits(DeleteEntryInputSet, choreography.InputSet);
util.inherits(DeleteEntryResultSet, choreography.ResultSet);
exports.DeleteEntry = DeleteEntry;


/*
    DeleteItem
    Deletes a specified item from a To-do list.
*/


var DeleteItem = function(session) {
    /*
        Create a new instance of the DeleteItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/DeleteItem"
    DeleteItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteItemInputSet = function() {
    DeleteItemInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, integer) The ID for the list item to delete.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteItemResultSet = function(resultStream) {
    DeleteItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No structured response is returned for delete item requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteItem, choreography.Choreography);
util.inherits(DeleteItemInputSet, choreography.InputSet);
util.inherits(DeleteItemResultSet, choreography.ResultSet);
exports.DeleteItem = DeleteItem;


/*
    DeleteList
    Deletes a specified To-do list from a project
*/


var DeleteList = function(session) {
    /*
        Create a new instance of the DeleteList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/DeleteList"
    DeleteList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteListInputSet = function() {
    DeleteListInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID for the To-Do list to delete.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteListResultSet = function(resultStream) {
    DeleteListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No structured response is returned for delete list requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteList, choreography.Choreography);
util.inherits(DeleteListInputSet, choreography.InputSet);
util.inherits(DeleteListResultSet, choreography.ResultSet);
exports.DeleteList = DeleteList;


/*
    GetAllEntries
    Retrieves all calendar entries from a specified project.
*/


var GetAllEntries = function(session) {
    /*
        Create a new instance of the GetAllEntries Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetAllEntries"
    GetAllEntries.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllEntriesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllEntriesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllEntries
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllEntriesInputSet = function() {
    GetAllEntriesInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project from which to retrieve all calendar entries.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllEntries Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllEntriesResultSet = function(resultStream) {
    GetAllEntriesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllEntries, choreography.Choreography);
util.inherits(GetAllEntriesInputSet, choreography.InputSet);
util.inherits(GetAllEntriesResultSet, choreography.ResultSet);
exports.GetAllEntries = GetAllEntries;


/*
    GetAllEvents
    Retrieves all calendar events from a specified project.
*/


var GetAllEvents = function(session) {
    /*
        Create a new instance of the GetAllEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetAllEvents"
    GetAllEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllEventsInputSet = function() {
    GetAllEventsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project from which to retrieve all calendar events.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllEventsResultSet = function(resultStream) {
    GetAllEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllEvents, choreography.Choreography);
util.inherits(GetAllEventsInputSet, choreography.InputSet);
util.inherits(GetAllEventsResultSet, choreography.ResultSet);
exports.GetAllEvents = GetAllEvents;


/*
    GetAllListItems
    Retrieves all items in a specified To-do list.
*/


var GetAllListItems = function(session) {
    /*
        Create a new instance of the GetAllListItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetAllListItems"
    GetAllListItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllListItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllListItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllListItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllListItemsInputSet = function() {
    GetAllListItemsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID of the list for which you're returning items.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllListItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllListItemsResultSet = function(resultStream) {
    GetAllListItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllListItems, choreography.Choreography);
util.inherits(GetAllListItemsInputSet, choreography.InputSet);
util.inherits(GetAllListItemsResultSet, choreography.ResultSet);
exports.GetAllListItems = GetAllListItems;


/*
    GetAllLists
    Retrieves all To-do lists assigned to a specified user or company.
*/


var GetAllLists = function(session) {
    /*
        Create a new instance of the GetAllLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetAllLists"
    GetAllLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllListsInputSet = function() {
    GetAllListsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponsibleParty input for this Choreo. ((optional, integer) The user ID or company ID  (preceded by a “c”, as in "c1234") the To-Do lists are assigned to. Defaults to unassigned To-Dos If left blank.)
        */
        this.set_ResponsibleParty = function(value) {
            this.setInput("ResponsibleParty", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllListsResultSet = function(resultStream) {
    GetAllListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllLists, choreography.Choreography);
util.inherits(GetAllListsInputSet, choreography.InputSet);
util.inherits(GetAllListsResultSet, choreography.ResultSet);
exports.GetAllLists = GetAllLists;


/*
    GetAllMilestones
    Retrieves all milestones for a specified project.
*/


var GetAllMilestones = function(session) {
    /*
        Create a new instance of the GetAllMilestones Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetAllMilestones"
    GetAllMilestones.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetAllMilestonesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetAllMilestonesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetAllMilestones
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetAllMilestonesInputSet = function() {
    GetAllMilestonesInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project from which to retrieve all milestones.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetAllMilestones Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetAllMilestonesResultSet = function(resultStream) {
    GetAllMilestonesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetAllMilestones, choreography.Choreography);
util.inherits(GetAllMilestonesInputSet, choreography.InputSet);
util.inherits(GetAllMilestonesResultSet, choreography.ResultSet);
exports.GetAllMilestones = GetAllMilestones;


/*
    GetEntry
    Retrieves a single calendar entry in a specified project.
*/


var GetEntry = function(session) {
    /*
        Create a new instance of the GetEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetEntry"
    GetEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetEntryInputSet = function() {
    GetEntryInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, integer) The ID for the calendar entry to retrieve.)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project from which to retrieve the calendar entry.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetEntryResultSet = function(resultStream) {
    GetEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetEntry, choreography.Choreography);
util.inherits(GetEntryInputSet, choreography.InputSet);
util.inherits(GetEntryResultSet, choreography.ResultSet);
exports.GetEntry = GetEntry;


/*
    GetFiles
    Retrieves a list of files (attachments) in a specified project.
*/


var GetFiles = function(session) {
    /*
        Create a new instance of the GetFiles Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetFiles"
    GetFiles.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetFilesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetFilesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetFiles
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetFilesInputSet = function() {
    GetFilesInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project that contains the attachments to retrieve.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetFiles Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetFilesResultSet = function(resultStream) {
    GetFilesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetFiles, choreography.Choreography);
util.inherits(GetFilesInputSet, choreography.InputSet);
util.inherits(GetFilesResultSet, choreography.ResultSet);
exports.GetFiles = GetFiles;


/*
    GetItem
    Retrieves a single, specified item in a To-do list.
*/


var GetItem = function(session) {
    /*
        Create a new instance of the GetItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetItem"
    GetItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetItemInputSet = function() {
    GetItemInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, integer) The ID of the item to return.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetItemResultSet = function(resultStream) {
    GetItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetItem, choreography.Choreography);
util.inherits(GetItemInputSet, choreography.InputSet);
util.inherits(GetItemResultSet, choreography.ResultSet);
exports.GetItem = GetItem;


/*
    GetList
    Retrieves a single To-do list specified by its ID.
*/


var GetList = function(session) {
    /*
        Create a new instance of the GetList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetList"
    GetList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListInputSet = function() {
    GetListInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID for the To-Do list to return.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListResultSet = function(resultStream) {
    GetListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetList, choreography.Choreography);
util.inherits(GetListInputSet, choreography.InputSet);
util.inherits(GetListResultSet, choreography.ResultSet);
exports.GetList = GetList;


/*
    GetListsInProject
    Retrieves a list of To-do records that are in the given project.
*/


var GetListsInProject = function(session) {
    /*
        Create a new instance of the GetListsInProject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetListsInProject"
    GetListsInProject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetListsInProjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetListsInProjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetListsInProject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetListsInProjectInputSet = function() {
    GetListsInProjectInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) Specify “pending” to return To-Dos with uncompleted items, or “finished” to return To-Dos with no uncompleted items. Defaults to all lists.)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project that contains the To-Dos to retrieve.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetListsInProject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListsInProjectResultSet = function(resultStream) {
    GetListsInProjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetListsInProject, choreography.Choreography);
util.inherits(GetListsInProjectInputSet, choreography.InputSet);
util.inherits(GetListsInProjectResultSet, choreography.ResultSet);
exports.GetListsInProject = GetListsInProject;


/*
    GetMessages
    Retrieves a list of messages associated with a specified project.
*/


var GetMessages = function(session) {
    /*
        Create a new instance of the GetMessages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetMessages"
    GetMessages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetMessagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetMessagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetMessages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetMessagesInputSet = function() {
    GetMessagesInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project associated with the messages you want to retrieve.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetMessages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetMessagesResultSet = function(resultStream) {
    GetMessagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetMessages, choreography.Choreography);
util.inherits(GetMessagesInputSet, choreography.InputSet);
util.inherits(GetMessagesResultSet, choreography.ResultSet);
exports.GetMessages = GetMessages;


/*
    GetPeopleAcrossProjects
    Retrieves all people that the logged in user has permission to see.
*/


var GetPeopleAcrossProjects = function(session) {
    /*
        Create a new instance of the GetPeopleAcrossProjects Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetPeopleAcrossProjects"
    GetPeopleAcrossProjects.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPeopleAcrossProjectsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPeopleAcrossProjectsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPeopleAcrossProjects
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPeopleAcrossProjectsInputSet = function() {
    GetPeopleAcrossProjectsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPeopleAcrossProjects Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPeopleAcrossProjectsResultSet = function(resultStream) {
    GetPeopleAcrossProjectsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPeopleAcrossProjects, choreography.Choreography);
util.inherits(GetPeopleAcrossProjectsInputSet, choreography.InputSet);
util.inherits(GetPeopleAcrossProjectsResultSet, choreography.ResultSet);
exports.GetPeopleAcrossProjects = GetPeopleAcrossProjects;


/*
    GetPeopleWithinProject
    Retrieves all people that have access to a specified project.
*/


var GetPeopleWithinProject = function(session) {
    /*
        Create a new instance of the GetPeopleWithinProject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetPeopleWithinProject"
    GetPeopleWithinProject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetPeopleWithinProjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetPeopleWithinProjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetPeopleWithinProject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetPeopleWithinProjectInputSet = function() {
    GetPeopleWithinProjectInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectId input for this Choreo. ((required, integer) The ID for the project associated with the people you want to retrieve.)
        */
        this.set_ProjectId = function(value) {
            this.setInput("ProjectId", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetPeopleWithinProject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetPeopleWithinProjectResultSet = function(resultStream) {
    GetPeopleWithinProjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetPeopleWithinProject, choreography.Choreography);
util.inherits(GetPeopleWithinProjectInputSet, choreography.InputSet);
util.inherits(GetPeopleWithinProjectResultSet, choreography.ResultSet);
exports.GetPeopleWithinProject = GetPeopleWithinProject;


/*
    GetProject
    Retrieves an individual project using a project id that you specify.
*/


var GetProject = function(session) {
    /*
        Create a new instance of the GetProject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetProject"
    GetProject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetProjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetProjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetProject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetProjectInputSet = function() {
    GetProjectInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectId input for this Choreo. ((required, integer) The ID for the project you want to retrieve.)
        */
        this.set_ProjectId = function(value) {
            this.setInput("ProjectId", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetProject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetProjectResultSet = function(resultStream) {
    GetProjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetProject, choreography.Choreography);
util.inherits(GetProjectInputSet, choreography.InputSet);
util.inherits(GetProjectResultSet, choreography.ResultSet);
exports.GetProject = GetProject;


/*
    GetProjects
    Retrieves active, inactive, and archived projects.
*/


var GetProjects = function(session) {
    /*
        Create a new instance of the GetProjects Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/GetProjects"
    GetProjects.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetProjectsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetProjectsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetProjects
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetProjectsInputSet = function() {
    GetProjectsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetProjects Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetProjectsResultSet = function(resultStream) {
    GetProjectsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetProjects, choreography.Choreography);
util.inherits(GetProjectsInputSet, choreography.InputSet);
util.inherits(GetProjectsResultSet, choreography.ResultSet);
exports.GetProjects = GetProjects;


/*
    ProjectCounts
    Retrieves a count of all projects sorted by project status.
*/


var ProjectCounts = function(session) {
    /*
        Create a new instance of the ProjectCounts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/ProjectCounts"
    ProjectCounts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ProjectCountsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ProjectCountsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ProjectCounts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ProjectCountsInputSet = function() {
    ProjectCountsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) The Basecamp account name for you or your company. This is the first part of your account URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) Your Basecamp password.  You can use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) Your Basecamp username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ProjectCounts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ProjectCountsResultSet = function(resultStream) {
    ProjectCountsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ProjectCounts, choreography.Choreography);
util.inherits(ProjectCountsInputSet, choreography.InputSet);
util.inherits(ProjectCountsResultSet, choreography.ResultSet);
exports.ProjectCounts = ProjectCounts;


/*
    ReorderItems
    Reorders the items in a specified To-do list.
*/


var ReorderItems = function(session) {
    /*
        Create a new instance of the ReorderItems Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/ReorderItems"
    ReorderItems.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReorderItemsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReorderItemsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReorderItems
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReorderItemsInputSet = function() {
    ReorderItemsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the FirstItemID input for this Choreo. ((required, integer) The ID number for the first item in the list.)
        */
        this.set_FirstItemID = function(value) {
            this.setInput("FirstItemID", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID for the To-do list the items of which you're reordering.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the SecondItemID input for this Choreo. ((optional, integer) The ID number for the second item in the list.)
        */
        this.set_SecondItemID = function(value) {
            this.setInput("SecondItemID", value);
        }

        /*
        Set the value of the ThirdItemID input for this Choreo. ((optional, integer) The ID number for the third item in the list.)
        */
        this.set_ThirdItemID = function(value) {
            this.setInput("ThirdItemID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReorderItems Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReorderItemsResultSet = function(resultStream) {
    ReorderItemsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No response is returned from Basecamp for reorder items requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReorderItems, choreography.Choreography);
util.inherits(ReorderItemsInputSet, choreography.InputSet);
util.inherits(ReorderItemsResultSet, choreography.ResultSet);
exports.ReorderItems = ReorderItems;


/*
    ReorderLists
    Allows you to reorder To-do lists in a specified project.
*/


var ReorderLists = function(session) {
    /*
        Create a new instance of the ReorderLists Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/ReorderLists"
    ReorderLists.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReorderListsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReorderListsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReorderLists
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReorderListsInputSet = function() {
    ReorderListsInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the FirstListID input for this Choreo. ((required, integer) The ID number for the project's first To-Do list.)
        */
        this.set_FirstListID = function(value) {
            this.setInput("FirstListID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project associated with the to-do lists that you are reordering.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the SecondListID input for this Choreo. ((optional, integer) The ID number for the project's second To-Do list.)
        */
        this.set_SecondListID = function(value) {
            this.setInput("SecondListID", value);
        }

        /*
        Set the value of the ThirdListID input for this Choreo. ((optional, integer) The ID number for the project's third To-Do list.)
        */
        this.set_ThirdListID = function(value) {
            this.setInput("ThirdListID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReorderLists Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReorderListsResultSet = function(resultStream) {
    ReorderListsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No response is returned from Basecamp for update requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReorderLists, choreography.Choreography);
util.inherits(ReorderListsInputSet, choreography.InputSet);
util.inherits(ReorderListsResultSet, choreography.ResultSet);
exports.ReorderLists = ReorderLists;


/*
    UncompleteEntry
    Marks a specific calendar entry as uncompleted.
*/


var UncompleteEntry = function(session) {
    /*
        Create a new instance of the UncompleteEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/UncompleteEntry"
    UncompleteEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UncompleteEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UncompleteEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UncompleteEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UncompleteEntryInputSet = function() {
    UncompleteEntryInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, integer) The ID for the calendar entry to mark as uncompleted.)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID for the project with the calendar entry to mark as uncompleted.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UncompleteEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UncompleteEntryResultSet = function(resultStream) {
    UncompleteEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UncompleteEntry, choreography.Choreography);
util.inherits(UncompleteEntryInputSet, choreography.InputSet);
util.inherits(UncompleteEntryResultSet, choreography.ResultSet);
exports.UncompleteEntry = UncompleteEntry;


/*
    UncompleteItem
    Marks a single, specified item in a To-do list as incomplete.
*/


var UncompleteItem = function(session) {
    /*
        Create a new instance of the UncompleteItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/UncompleteItem"
    UncompleteItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UncompleteItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UncompleteItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UncompleteItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UncompleteItemInputSet = function() {
    UncompleteItemInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, integer) The ID of the item to mark as complete.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UncompleteItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UncompleteItemResultSet = function(resultStream) {
    UncompleteItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (There is no structrued response from uncomplete item requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UncompleteItem, choreography.Choreography);
util.inherits(UncompleteItemInputSet, choreography.InputSet);
util.inherits(UncompleteItemResultSet, choreography.ResultSet);
exports.UncompleteItem = UncompleteItem;


/*
    UpdateEntry
    Updates a calendar event or milestone in a project you specify. 
*/


var UpdateEntry = function(session) {
    /*
        Create a new instance of the UpdateEntry Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/UpdateEntry"
    UpdateEntry.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateEntryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateEntryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateEntry
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateEntryInputSet = function() {
    UpdateEntryInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the EndDate input for this Choreo. ((required, date) The new end date for the updated entry, in the format YYYY-MM-DD.)
        */
        this.set_EndDate = function(value) {
            this.setInput("EndDate", value);
        }

        /*
        Set the value of the EntryID input for this Choreo. ((required, integer) The ID for the calendar entry to update.)
        */
        this.set_EntryID = function(value) {
            this.setInput("EntryID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ProjectID input for this Choreo. ((required, integer) The ID of the project with the calendar entry to update.)
        */
        this.set_ProjectID = function(value) {
            this.setInput("ProjectID", value);
        }

        /*
        Set the value of the ResponsibleParty input for this Choreo. ((optional, any) The user ID or company ID (preceded by a “c”, as in "c1234") to reassign the entry to. Applies only to "Milestone" entry types.)
        */
        this.set_ResponsibleParty = function(value) {
            this.setInput("ResponsibleParty", value);
        }

        /*
        Set the value of the StartDate input for this Choreo. ((optional, date) The new start date for the updated entry, in the format YYYY-MM-DD.)
        */
        this.set_StartDate = function(value) {
            this.setInput("StartDate", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((optional, string) The new title for the updated entry.)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The new type for the updated entry, either "CalendarEvent" (the default) or "Milestone".)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateEntry Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateEntryResultSet = function(resultStream) {
    UpdateEntryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "TemplateOutput" output from this Choreo execution. (The request created from the input template.)
        */
        this.get_TemplateOutput = function() {
            return this.getResult("TemplateOutput");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response returned from Basecamp.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateEntry, choreography.Choreography);
util.inherits(UpdateEntryInputSet, choreography.InputSet);
util.inherits(UpdateEntryResultSet, choreography.ResultSet);
exports.UpdateEntry = UpdateEntry;


/*
    UpdateItem
    Creates a new item for a specified To-do list.
*/


var UpdateItem = function(session) {
    /*
        Create a new instance of the UpdateItem Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/UpdateItem"
    UpdateItem.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateItemResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateItemInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateItem
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateItemInputSet = function() {
    UpdateItemInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Content input for this Choreo. ((required, string) The text of the updated item.)
        */
        this.set_Content = function(value) {
            this.setInput("Content", value);
        }

        /*
        Set the value of the ItemID input for this Choreo. ((required, integer) The ID for the item to update.)
        */
        this.set_ItemID = function(value) {
            this.setInput("ItemID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ResponsibleParty input for this Choreo. ((optional, integer) The user ID or company ID  (preceded by a “c”, as in "c1234") to re-assign the item to when updated. Defaults to unassigned If left blank.)
        */
        this.set_ResponsibleParty = function(value) {
            this.setInput("ResponsibleParty", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateItem Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateItemResultSet = function(resultStream) {
    UpdateItemResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No structured response is returned from Basecamp for new item requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateItem, choreography.Choreography);
util.inherits(UpdateItemInputSet, choreography.InputSet);
util.inherits(UpdateItemResultSet, choreography.ResultSet);
exports.UpdateItem = UpdateItem;


/*
    UpdateList
    Updates a specified To-do list record 
*/


var UpdateList = function(session) {
    /*
        Create a new instance of the UpdateList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/37Signals/Basecamp/UpdateList"
    UpdateList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateListInputSet = function() {
    UpdateListInputSet.super_.call(this);
        /*
        Set the value of the AccountName input for this Choreo. ((required, string) A valid Basecamp account name. This is the first part of the account's URL.)
        */
        this.set_AccountName = function(value) {
            this.setInput("AccountName", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The new description for the list.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ListID input for this Choreo. ((required, integer) The ID for the list to update.)
        */
        this.set_ListID = function(value) {
            this.setInput("ListID", value);
        }

        /*
        Set the value of the MilestoneID input for this Choreo. ((optional, integer) The ID of an existing milestone to add to the To-Do list.)
        */
        this.set_MilestoneID = function(value) {
            this.setInput("MilestoneID", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) The new name for the list.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The Basecamp account password. Use the value 'X' when specifying an API Key for the Username input.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) A Basecamp account username or API Key.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateListResultSet = function(resultStream) {
    UpdateListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (No response is returned from Basecamp for update requests.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdateList, choreography.Choreography);
util.inherits(UpdateListInputSet, choreography.InputSet);
util.inherits(UpdateListResultSet, choreography.ResultSet);
exports.UpdateList = UpdateList;

