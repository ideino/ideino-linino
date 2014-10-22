
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreatePlan
    Creates a subscription plan
*/


var CreatePlan = function(session) {
    /*
        Create a new instance of the CreatePlan Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Plans/CreatePlan"
    CreatePlan.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreatePlanResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreatePlanInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreatePlan
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreatePlanInputSet = function() {
    CreatePlanInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Amount input for this Choreo. ((required, integer) The amount in cents to charge on a recurring basis for subscribers of this plan)
        */
        this.set_Amount = function(value) {
            this.setInput("Amount", value);
        }

        /*
        Set the value of the Currency input for this Choreo. ((optional, string) 3-letter ISO code for currency. Defaults to 'usd' which is currently the only supported currency.)
        */
        this.set_Currency = function(value) {
            this.setInput("Currency", value);
        }

        /*
        Set the value of the Interval input for this Choreo. ((required, string) Indicates billing frequency. Valid values are: month or year.)
        */
        this.set_Interval = function(value) {
            this.setInput("Interval", value);
        }

        /*
        Set the value of the PlanID input for this Choreo. ((required, string) The unique identifier of the plan you want to create)
        */
        this.set_PlanID = function(value) {
            this.setInput("PlanID", value);
        }

        /*
        Set the value of the PlanName input for this Choreo. ((required, string) The name of the plan which will be displayed in the Stripe web interface.)
        */
        this.set_PlanName = function(value) {
            this.setInput("PlanName", value);
        }

        /*
        Set the value of the TrialPeriodDays input for this Choreo. ((optional, integer) The number of days in a trial period (customer will not be billed until the trial period is over))
        */
        this.set_TrialPeriodDays = function(value) {
            this.setInput("TrialPeriodDays", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreatePlan Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreatePlanResultSet = function(resultStream) {
    CreatePlanResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreatePlan, choreography.Choreography);
util.inherits(CreatePlanInputSet, choreography.InputSet);
util.inherits(CreatePlanResultSet, choreography.ResultSet);
exports.CreatePlan = CreatePlan;


/*
    DeletePlan
    Deletes a specified plan.
*/


var DeletePlan = function(session) {
    /*
        Create a new instance of the DeletePlan Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Plans/DeletePlan"
    DeletePlan.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeletePlanResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeletePlanInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeletePlan
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeletePlanInputSet = function() {
    DeletePlanInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the PlanID input for this Choreo. ((required, string) The unique identifier of the plan you want to delete)
        */
        this.set_PlanID = function(value) {
            this.setInput("PlanID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeletePlan Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeletePlanResultSet = function(resultStream) {
    DeletePlanResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeletePlan, choreography.Choreography);
util.inherits(DeletePlanInputSet, choreography.InputSet);
util.inherits(DeletePlanResultSet, choreography.ResultSet);
exports.DeletePlan = DeletePlan;


/*
    ListAllPlans
    Returns a list of all plans. 
*/


var ListAllPlans = function(session) {
    /*
        Create a new instance of the ListAllPlans Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Plans/ListAllPlans"
    ListAllPlans.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllPlansResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllPlansInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllPlans
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllPlansInputSet = function() {
    ListAllPlansInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the Count input for this Choreo. ((optional, integer) The limit of plans to be returned. Can range from 1 to 100. Defaults to 10.)
        */
        this.set_Count = function(value) {
            this.setInput("Count", value);
        }

        /*
        Set the value of the Offset input for this Choreo. ((optional, integer) Stripe will return a list of plans starting at the specified offset. Defaults to 0.)
        */
        this.set_Offset = function(value) {
            this.setInput("Offset", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllPlans Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllPlansResultSet = function(resultStream) {
    ListAllPlansResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllPlans, choreography.Choreography);
util.inherits(ListAllPlansInputSet, choreography.InputSet);
util.inherits(ListAllPlansResultSet, choreography.ResultSet);
exports.ListAllPlans = ListAllPlans;


/*
    RetrievePlan
    Retrieves plan details with a specified plan id.
*/


var RetrievePlan = function(session) {
    /*
        Create a new instance of the RetrievePlan Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Plans/RetrievePlan"
    RetrievePlan.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RetrievePlanResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RetrievePlanInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RetrievePlan
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RetrievePlanInputSet = function() {
    RetrievePlanInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the PlanID input for this Choreo. ((required, string) The unique identifier of the plan you want to retrieve)
        */
        this.set_PlanID = function(value) {
            this.setInput("PlanID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RetrievePlan Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RetrievePlanResultSet = function(resultStream) {
    RetrievePlanResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RetrievePlan, choreography.Choreography);
util.inherits(RetrievePlanInputSet, choreography.InputSet);
util.inherits(RetrievePlanResultSet, choreography.ResultSet);
exports.RetrievePlan = RetrievePlan;


/*
    UpdatePlan
    Updates the name of an existing plan.
*/


var UpdatePlan = function(session) {
    /*
        Create a new instance of the UpdatePlan Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Stripe/Plans/UpdatePlan"
    UpdatePlan.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdatePlanResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdatePlanInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdatePlan
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdatePlanInputSet = function() {
    UpdatePlanInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Stripe)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the PlanID input for this Choreo. ((required, string) The unique identifier of the plan you want to update)
        */
        this.set_PlanID = function(value) {
            this.setInput("PlanID", value);
        }

        /*
        Set the value of the PlanName input for this Choreo. ((conditional, string) The new name of the plan which will be displayed in the Stripe web interface.)
        */
        this.set_PlanName = function(value) {
            this.setInput("PlanName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdatePlan Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdatePlanResultSet = function(resultStream) {
    UpdatePlanResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Stripe)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UpdatePlan, choreography.Choreography);
util.inherits(UpdatePlanInputSet, choreography.InputSet);
util.inherits(UpdatePlanResultSet, choreography.ResultSet);
exports.UpdatePlan = UpdatePlan;

