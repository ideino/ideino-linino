
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    DeleteScheduledDeliveryTime
    Delete a scheduled Newsletter delivery time.
*/


var DeleteScheduledDeliveryTime = function(session) {
    /*
        Create a new instance of the DeleteScheduledDeliveryTime Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Schedule/DeleteScheduledDeliveryTime"
    DeleteScheduledDeliveryTime.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteScheduledDeliveryTimeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteScheduledDeliveryTimeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteScheduledDeliveryTime
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteScheduledDeliveryTimeInputSet = function() {
    DeleteScheduledDeliveryTimeInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the newsletter for which scheduled delievery will be removed.)
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
A ResultSet with methods tailored to the values returned by the DeleteScheduledDeliveryTime Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteScheduledDeliveryTimeResultSet = function(resultStream) {
    DeleteScheduledDeliveryTimeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteScheduledDeliveryTime, choreography.Choreography);
util.inherits(DeleteScheduledDeliveryTimeInputSet, choreography.InputSet);
util.inherits(DeleteScheduledDeliveryTimeResultSet, choreography.ResultSet);
exports.DeleteScheduledDeliveryTime = DeleteScheduledDeliveryTime;


/*
    GetNewsletterScheduleTime
    Get the scheduled delivery time of a specified Newsletter.
*/


var GetNewsletterScheduleTime = function(session) {
    /*
        Create a new instance of the GetNewsletterScheduleTime Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Schedule/GetNewsletterScheduleTime"
    GetNewsletterScheduleTime.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetNewsletterScheduleTimeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetNewsletterScheduleTimeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetNewsletterScheduleTime
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetNewsletterScheduleTimeInputSet = function() {
    GetNewsletterScheduleTimeInputSet.super_.call(this);
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
        Set the value of the Name input for this Choreo. ((required, string) The name of the newsletter for which delivery schedule information will be retrieved.)
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
A ResultSet with methods tailored to the values returned by the GetNewsletterScheduleTime Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetNewsletterScheduleTimeResultSet = function(resultStream) {
    GetNewsletterScheduleTimeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetNewsletterScheduleTime, choreography.Choreography);
util.inherits(GetNewsletterScheduleTimeInputSet, choreography.InputSet);
util.inherits(GetNewsletterScheduleTimeResultSet, choreography.ResultSet);
exports.GetNewsletterScheduleTime = GetNewsletterScheduleTime;


/*
    ScheduleNewsletterDelivery
    Schedule a delivery time for an existing Newsletter.
*/


var ScheduleNewsletterDelivery = function(session) {
    /*
        Create a new instance of the ScheduleNewsletterDelivery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/SendGrid/NewsletterAPI/Schedule/ScheduleNewsletterDelivery"
    ScheduleNewsletterDelivery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ScheduleNewsletterDeliveryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ScheduleNewsletterDeliveryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ScheduleNewsletterDelivery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ScheduleNewsletterDeliveryInputSet = function() {
    ScheduleNewsletterDeliveryInputSet.super_.call(this);
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
        Set the value of the After input for this Choreo. ((optional, integer) The number of minites after which the newsletter will be delivered.)
        */
        this.set_After = function(value) {
            this.setInput("After", value);
        }

        /*
        Set the value of the At input for this Choreo. ((optional, string) The date and time when the newsletter is to be delievered, in ISO 8601 format (YYYY-MM-DD HH:MM:SS+-HH:MM))
        */
        this.set_At = function(value) {
            this.setInput("At", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name of the newsletter that is being scheduled for delivery.  If the newsletter is to be sent immediately, then leave the At, and After parameters empty.)
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
A ResultSet with methods tailored to the values returned by the ScheduleNewsletterDelivery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ScheduleNewsletterDeliveryResultSet = function(resultStream) {
    ScheduleNewsletterDeliveryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from SendGrid. The format corresponds to the ResponseFormat input. Default is json.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ScheduleNewsletterDelivery, choreography.Choreography);
util.inherits(ScheduleNewsletterDeliveryInputSet, choreography.InputSet);
util.inherits(ScheduleNewsletterDeliveryResultSet, choreography.ResultSet);
exports.ScheduleNewsletterDelivery = ScheduleNewsletterDelivery;

