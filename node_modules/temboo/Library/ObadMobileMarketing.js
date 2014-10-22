
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AddCSVData
    Transfer a csv file to add records to a specified group.
*/


var AddCSVData = function(session) {
    /*
        Create a new instance of the AddCSVData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/AddCSVData"
    AddCSVData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AddCSVDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AddCSVDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AddCSVData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AddCSVDataInputSet = function() {
    AddCSVDataInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the GroupID input for this Choreo. ((integer) Unique ID for the group you want to update)
        */
        this.set_GroupID = function(value) {
            this.setInput("GroupID", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((string) Specify the desired item list (i.e. camp, coupon, usergroup, shopgroup, or coupongroup). Defaults to 'shopgroup'.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the URLSource input for this Choreo. ((string) The URL where you are hosting the CSV data (i.e. http://mybucket.s3.amazonaws.com/my_new_users.csv))
        */
        this.set_URLSource = function(value) {
            this.setInput("URLSource", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AddCSVData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AddCSVDataResultSet = function(resultStream) {
    AddCSVDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AddCSVData, choreography.Choreography);
util.inherits(AddCSVDataInputSet, choreography.InputSet);
util.inherits(AddCSVDataResultSet, choreography.ResultSet);
exports.AddCSVData = AddCSVData;


/*
    CampaignSend
    Generate a CSV file for sending a campaign.
*/


var CampaignSend = function(session) {
    /*
        Create a new instance of the CampaignSend Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/CampaignSend"
    CampaignSend.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CampaignSendResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CampaignSendInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CampaignSend
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CampaignSendInputSet = function() {
    CampaignSendInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CampaignID input for this Choreo. ((integer) The ID for the campaign you want to send)
        */
        this.set_CampaignID = function(value) {
            this.setInput("CampaignID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of campaign you're sending.  Can be sms, mail, or smsmail. Defaults to sms.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CampaignSend Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CampaignSendResultSet = function(resultStream) {
    CampaignSendResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CampaignSend, choreography.Choreography);
util.inherits(CampaignSendInputSet, choreography.InputSet);
util.inherits(CampaignSendResultSet, choreography.ResultSet);
exports.CampaignSend = CampaignSend;


/*
    CouponGroupData
    Allows you to add or remove a coupon from a coupon group.
*/


var CouponGroupData = function(session) {
    /*
        Create a new instance of the CouponGroupData Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/CouponGroupData"
    CouponGroupData.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CouponGroupDataResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CouponGroupDataInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CouponGroupData
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CouponGroupDataInputSet = function() {
    CouponGroupDataInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the CouponGroupID input for this Choreo. ((integer) The ID of the coupongroup you need to update)
        */
        this.set_CouponGroupID = function(value) {
            this.setInput("CouponGroupID", value);
        }

        /*
        Set the value of the CouponID input for this Choreo. ((integer) The ID of the coupon you need to update)
        */
        this.set_CouponID = function(value) {
            this.setInput("CouponID", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, boolean) Specify 0 for removing or 1 for adding. Defaults to 1.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the CSVData input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the CouponGroupData Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CouponGroupDataResultSet = function(resultStream) {
    CouponGroupDataResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CouponGroupData, choreography.Choreography);
util.inherits(CouponGroupDataInputSet, choreography.InputSet);
util.inherits(CouponGroupDataResultSet, choreography.ResultSet);
exports.CouponGroupData = CouponGroupData;


/*
    EditCoupon
    Allows you to create a new coupon or update an existing one.
*/


var EditCoupon = function(session) {
    /*
        Create a new instance of the EditCoupon Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/EditCoupon"
    EditCoupon.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditCouponResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditCouponInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditCoupon
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditCouponInputSet = function() {
    EditCouponInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the CouponId input for this Choreo. ((integer) The ID of the coupon you need to update.  In creation mode, leave this blank, and the ID will be returned in the response.)
        */
        this.set_CouponId = function(value) {
            this.setInput("CouponId", value);
        }

        /*
        Set the value of the Desc1 input for this Choreo. ((string) Description at the TOP of the coupon)
        */
        this.set_Desc1 = function(value) {
            this.setInput("Desc1", value);
        }

        /*
        Set the value of the Desc2 input for this Choreo. ((string) Description at the BOTTOM line 1 of the coupon)
        */
        this.set_Desc2 = function(value) {
            this.setInput("Desc2", value);
        }

        /*
        Set the value of the Desc3 input for this Choreo. ((string) Description of the BOTTOM line 2 of the coupon)
        */
        this.set_Desc3 = function(value) {
            this.setInput("Desc3", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the From input for this Choreo. ((date) The first date that the coupon is available (formatted like YYYY/MM/DD))
        */
        this.set_From = function(value) {
            this.setInput("From", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, boolean) Specify the writing mode. Use '0' for creating or '1'  for updating. Defaults to 0.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((string) The title of the coupon that will be only used for the console)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the To input for this Choreo. ((date) The final date that the coupon is available (formatted like YYYY/MM/DD))
        */
        this.set_To = function(value) {
            this.setInput("To", value);
        }

        /*
        Set the value of the UseOnce input for this Choreo. ((optional, boolean) Use '1' for use and burn coupon one time only and '0' for unlimited use and burn. Defaults to 0.)
        */
        this.set_UseOnce = function(value) {
            this.setInput("UseOnce", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the EditCoupon Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditCouponResultSet = function(resultStream) {
    EditCouponResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditCoupon, choreography.Choreography);
util.inherits(EditCouponInputSet, choreography.InputSet);
util.inherits(EditCouponResultSet, choreography.ResultSet);
exports.EditCoupon = EditCoupon;


/*
    EditGroup
    Allows you to create a new group or update an existing one.
*/


var EditGroup = function(session) {
    /*
        Create a new instance of the EditGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/EditGroup"
    EditGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new EditGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new EditGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the EditGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var EditGroupInputSet = function() {
    EditGroupInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((string) The description of the group)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the GroupID input for this Choreo. ((integer) The id of the group you need to update. In creation mode, leave blank and the id will be returned in the response.)
        */
        this.set_GroupID = function(value) {
            this.setInput("GroupID", value);
        }

        /*
        Set the value of the Mode input for this Choreo. ((optional, boolean) Specify 0 for creating and 1 for updating. Defaults to 0.)
        */
        this.set_Mode = function(value) {
            this.setInput("Mode", value);
        }

        /*
        Set the value of the Title input for this Choreo. ((string) The title of the group)
        */
        this.set_Title = function(value) {
            this.setInput("Title", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) The type of group to perform the action on.  Can be usergroup, shopgroup, or coupongroup. Defaults to usergroup.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the CSVData input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the EditGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var EditGroupResultSet = function(resultStream) {
    EditGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(EditGroup, choreography.Choreography);
util.inherits(EditGroupInputSet, choreography.InputSet);
util.inherits(EditGroupResultSet, choreography.ResultSet);
exports.EditGroup = EditGroup;


/*
    GetList
    Returns the list and parameters of a specified list type (i.e. campaigns, coupons, user groups, shop groups, or coupons groups).
*/


var GetList = function(session) {
    /*
        Create a new instance of the GetList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/GetList"
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
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((optional, integer) Unique ID for an item.  Defaults to 0 which returns ALL.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Specify the desired item list (i.e. camp, coupon, usergroup, shopgroup, or coupongroup). Defaults to coupon.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetListResultSet = function(resultStream) {
    GetListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
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
    ImageCampaign
    Transfer an image for updating the email body image or the wap banner of a campaign.
*/


var ImageCampaign = function(session) {
    /*
        Create a new instance of the ImageCampaign Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/ImageCampaign"
    ImageCampaign.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ImageCampaignResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ImageCampaignInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ImageCampaign
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ImageCampaignInputSet = function() {
    ImageCampaignInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CampaignID input for this Choreo. ((integer) The ID of the campaign you want to update)
        */
        this.set_CampaignID = function(value) {
            this.setInput("CampaignID", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Specify the desired image type to modify (i.e. mailimage or wapban). Defaults to mailimage.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the URLSource input for this Choreo. ((string) The URL where you are hosting the JPG file (i.e. http://mybucket.s3.amazonaws.com/my_image.jpg))
        */
        this.set_URLSource = function(value) {
            this.setInput("URLSource", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ImageCampaign Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ImageCampaignResultSet = function(resultStream) {
    ImageCampaignResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((XML) The response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ImageCampaign, choreography.Choreography);
util.inherits(ImageCampaignInputSet, choreography.InputSet);
util.inherits(ImageCampaignResultSet, choreography.ResultSet);
exports.ImageCampaign = ImageCampaign;


/*
    ImageCoupon
    Transfer an image for updating the coupon or coupon burn.
*/


var ImageCoupon = function(session) {
    /*
        Create a new instance of the ImageCoupon Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/ObadMobileMarketing/ImageCoupon"
    ImageCoupon.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ImageCouponResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ImageCouponInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ImageCoupon
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ImageCouponInputSet = function() {
    ImageCouponInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((string) Private Key for 1 unique distributor - provided by Obad Mobile Marketing)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((integer) Private Key for 1 unique customer to connect with - provided by Obad Mobile Marketing)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the CouponID input for this Choreo. ((integer) The ID of the coupon you want to update)
        */
        this.set_CouponID = function(value) {
            this.setInput("CouponID", value);
        }

        /*
        Set the value of the Endpoint input for this Choreo. ((string) The base URL for the server you want to access (i.e. http://10.10.10.1). Set this to the appropriate host for the demo sandbox or production.)
        */
        this.set_Endpoint = function(value) {
            this.setInput("Endpoint", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Specify the desired image type to update (i.e. coupon or couponburn). Defaults to coupon.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the URLSource input for this Choreo. ((string) The URL where you are hosting the JPG file (i.e. http://mybucket.s3.amazonaws.com/my_image.jpg))
        */
        this.set_URLSource = function(value) {
            this.setInput("URLSource", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ImageCoupon Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ImageCouponResultSet = function(resultStream) {
    ImageCouponResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The XML response from Obad)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ImageCoupon, choreography.Choreography);
util.inherits(ImageCouponInputSet, choreography.InputSet);
util.inherits(ImageCouponResultSet, choreography.ResultSet);
exports.ImageCoupon = ImageCoupon;

