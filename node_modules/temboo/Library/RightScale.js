
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateDeployment
    Create a RightScale Deployment.
*/


var CreateDeployment = function(session) {
    /*
        Create a new instance of the CreateDeployment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/CreateDeployment"
    CreateDeployment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDeploymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDeploymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDeployment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDeploymentInputSet = function() {
    CreateDeploymentInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, integer) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the DeploymentDefaultEC2AvailabilityZone input for this Choreo. ((optional, string) The default EC2 availability zone for this deployment.)
        */
        this.set_DeploymentDefaultEC2AvailabilityZone = function(value) {
            this.setInput("DeploymentDefaultEC2AvailabilityZone", value);
        }

        /*
        Set the value of the DeploymentDefaultVPCSubnetHref input for this Choreo. ((optional, string) The href of the vpc subnet.)
        */
        this.set_DeploymentDefaultVPCSubnetHref = function(value) {
            this.setInput("DeploymentDefaultVPCSubnetHref", value);
        }

        /*
        Set the value of the DeploymentDescription input for this Choreo. ((optional, string) The deployment being created.)
        */
        this.set_DeploymentDescription = function(value) {
            this.setInput("DeploymentDescription", value);
        }

        /*
        Set the value of the DeploymentNickname input for this Choreo. ((required, string) The nickname of the deployment being created.)
        */
        this.set_DeploymentNickname = function(value) {
            this.setInput("DeploymentNickname", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDeployment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDeploymentResultSet = function(resultStream) {
    CreateDeploymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDeployment, choreography.Choreography);
util.inherits(CreateDeploymentInputSet, choreography.InputSet);
util.inherits(CreateDeploymentResultSet, choreography.ResultSet);
exports.CreateDeployment = CreateDeployment;


/*
    CreateServer
    Creates a RightScale server instance.
*/


var CreateServer = function(session) {
    /*
        Create a new instance of the CreateServer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/CreateServer"
    CreateServer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateServerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateServerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateServer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateServerInputSet = function() {
    CreateServerInputSet.super_.call(this);
        /*
        Set the value of the AKIImage input for this Choreo. ((optional, string) The URL to the AKI image.)
        */
        this.set_AKIImage = function(value) {
            this.setInput("AKIImage", value);
        }

        /*
        Set the value of the ARIImage input for this Choreo. ((optional, string) The URL to the ARI Image.)
        */
        this.set_ARIImage = function(value) {
            this.setInput("ARIImage", value);
        }

        /*
        Set the value of the AccountID input for this Choreo. ((required, integer) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the CloudID input for this Choreo. ((optional, integer) The cloud region identifier. If undefined, the default is 1 (us-east).)
        */
        this.set_CloudID = function(value) {
            this.setInput("CloudID", value);
        }

        /*
        Set the value of the EC2AvailabilityZone input for this Choreo. ((optional, string) The  EC2 availablity zone, for example: us-east-1a, or any.  Do not set, if also passing the vpc_subnet_href parameter.)
        */
        this.set_EC2AvailabilityZone = function(value) {
            this.setInput("EC2AvailabilityZone", value);
        }

        /*
        Set the value of the EC2Image input for this Choreo. ((optional, string) The URL to AMI image.)
        */
        this.set_EC2Image = function(value) {
            this.setInput("EC2Image", value);
        }

        /*
        Set the value of the EC2SSHKeyHref input for this Choreo. ((optional, string) The URL to the SSH Key.)
        */
        this.set_EC2SSHKeyHref = function(value) {
            this.setInput("EC2SSHKeyHref", value);
        }

        /*
        Set the value of the EC2SecurityGroupsHref input for this Choreo. ((optional, string) The URL(s) to security group(s). Do not set, if also passing the vpc_subnet_href parameter.)
        */
        this.set_EC2SecurityGroupsHref = function(value) {
            this.setInput("EC2SecurityGroupsHref", value);
        }

        /*
        Set the value of the InstanceType input for this Choreo. ((optional, string) The AWS instance type: small, medium, etc.)
        */
        this.set_InstanceType = function(value) {
            this.setInput("InstanceType", value);
        }

        /*
        Set the value of the MaxSpotPrice input for this Choreo. ((optional, integer) The maximum price (a dollar value) dollars) per hour for the spot server.)
        */
        this.set_MaxSpotPrice = function(value) {
            this.setInput("MaxSpotPrice", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Pricing input for this Choreo. ((optional, string) AWS pricing.  Specify on_demand, or spot.)
        */
        this.set_Pricing = function(value) {
            this.setInput("Pricing", value);
        }

        /*
        Set the value of the ServerDeployment input for this Choreo. ((required, string) The URL of the deployment that this server wil be added to.)
        */
        this.set_ServerDeployment = function(value) {
            this.setInput("ServerDeployment", value);
        }

        /*
        Set the value of the ServerNickname input for this Choreo. ((required, string) The nickname for the server being created.)
        */
        this.set_ServerNickname = function(value) {
            this.setInput("ServerNickname", value);
        }

        /*
        Set the value of the ServerTemplate input for this Choreo. ((required, string) The URL to a server template.)
        */
        this.set_ServerTemplate = function(value) {
            this.setInput("ServerTemplate", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The username obtained from RightScale.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VPCSubnet input for this Choreo. ((optional, string) The href to the VPC subnet.)
        */
        this.set_VPCSubnet = function(value) {
            this.setInput("VPCSubnet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateServer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateServerResultSet = function(resultStream) {
    CreateServerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateServer, choreography.Choreography);
util.inherits(CreateServerInputSet, choreography.InputSet);
util.inherits(CreateServerResultSet, choreography.ResultSet);
exports.CreateServer = CreateServer;


/*
    CreateServerXMLInput
    Creates a RightScale server instance using a given XML template.
*/


var CreateServerXMLInput = function(session) {
    /*
        Create a new instance of the CreateServerXMLInput Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/CreateServerXMLInput"
    CreateServerXMLInput.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateServerXMLInputResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateServerXMLInputInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateServerXMLInput
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateServerXMLInputInputSet = function() {
    CreateServerXMLInputInputSet.super_.call(this);
        /*
        Set the value of the ServerParameters input for this Choreo. ((required, xml) The XML file containing the required parameters for the server creation. See documentation for XML schema.)
        */
        this.set_ServerParameters = function(value) {
            this.setInput("ServerParameters", value);
        }

        /*
        Set the value of the ARIImage input for this Choreo. ((required, string) The URL to the ARI Image.)
        */
        this.set_ARIImage = function(value) {
            this.setInput("ARIImage", value);
        }

        /*
        Set the value of the AccountID input for this Choreo. ((required, integer) The Account ID obtained from RightScale.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the CloudID input for this Choreo. ((required, integer) The cloud region identifier. If undefined, the default is: 1 (us-east).)
        */
        this.set_CloudID = function(value) {
            this.setInput("CloudID", value);
        }

        /*
        Set the value of the EC2AvailabilityZone input for this Choreo. ((optional, any) The  EC2 availablity zone, for example: us-east-1a, or any.  Do not set, if also passing the vpc_subnet_href parameter.)
        */
        this.set_EC2AvailabilityZone = function(value) {
            this.setInput("EC2AvailabilityZone", value);
        }

        /*
        Set the value of the EC2Image input for this Choreo. ((required, string) The URL to AMI image.)
        */
        this.set_EC2Image = function(value) {
            this.setInput("EC2Image", value);
        }

        /*
        Set the value of the EC2SSHKeyHref input for this Choreo. ((optional, any) The URL to the SSH Key.)
        */
        this.set_EC2SSHKeyHref = function(value) {
            this.setInput("EC2SSHKeyHref", value);
        }

        /*
        Set the value of the EC2SecurityGroupsHref input for this Choreo. ((optional, any) The URL(s) to security group(s). Do not set, if also passing the vpc_subnet_href parameter.)
        */
        this.set_EC2SecurityGroupsHref = function(value) {
            this.setInput("EC2SecurityGroupsHref", value);
        }

        /*
        Set the value of the InstanceType input for this Choreo. ((optional, any) The AWS instance type: small, medium, etc.)
        */
        this.set_InstanceType = function(value) {
            this.setInput("InstanceType", value);
        }

        /*
        Set the value of the MaxSpotPrice input for this Choreo. ((required, integer) The maximum price (a dollar value) dollars) per hour for the spot server.)
        */
        this.set_MaxSpotPrice = function(value) {
            this.setInput("MaxSpotPrice", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Pricing input for this Choreo. ((required, string) AWS pricing.  Specify on_demand, or spot.)
        */
        this.set_Pricing = function(value) {
            this.setInput("Pricing", value);
        }

        /*
        Set the value of the ServerDeployment input for this Choreo. ((optional, any) The URL of the deployment that this server wil be added to.)
        */
        this.set_ServerDeployment = function(value) {
            this.setInput("ServerDeployment", value);
        }

        /*
        Set the value of the ServerNickname input for this Choreo. ((optional, any) The nickname for the server being created.)
        */
        this.set_ServerNickname = function(value) {
            this.setInput("ServerNickname", value);
        }

        /*
        Set the value of the ServerTemplate input for this Choreo. ((optional, any) The URL to a server template.)
        */
        this.set_ServerTemplate = function(value) {
            this.setInput("ServerTemplate", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the VPCSubnet input for this Choreo. ((required, string) The href to the VPC subnet)
        */
        this.set_VPCSubnet = function(value) {
            this.setInput("VPCSubnet", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateServerXMLInput Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateServerXMLInputResultSet = function(resultStream) {
    CreateServerXMLInputResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateServerXMLInput, choreography.Choreography);
util.inherits(CreateServerXMLInputInputSet, choreography.InputSet);
util.inherits(CreateServerXMLInputResultSet, choreography.ResultSet);
exports.CreateServerXMLInput = CreateServerXMLInput;


/*
    GetArrayIndex
    Retrieve a list of server assets grouped within a particular RightScale Array. 
*/


var GetArrayIndex = function(session) {
    /*
        Create a new instance of the GetArrayIndex Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/GetArrayIndex"
    GetArrayIndex.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetArrayIndexResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetArrayIndexInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetArrayIndex
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetArrayIndexInputSet = function() {
    GetArrayIndexInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetArrayIndex Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetArrayIndexResultSet = function(resultStream) {
    GetArrayIndexResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetArrayIndex, choreography.Choreography);
util.inherits(GetArrayIndexInputSet, choreography.InputSet);
util.inherits(GetArrayIndexResultSet, choreography.ResultSet);
exports.GetArrayIndex = GetArrayIndex;


/*
    GetServerSettings
    Retrieve server settings for a specified RightScale Server ID.
*/


var GetServerSettings = function(session) {
    /*
        Create a new instance of the GetServerSettings Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/GetServerSettings"
    GetServerSettings.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetServerSettingsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetServerSettingsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetServerSettings
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetServerSettingsInputSet = function() {
    GetServerSettingsInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerID input for this Choreo. ((required, integer) The RightScale Server ID that is to be stopped.)
        */
        this.set_ServerID = function(value) {
            this.setInput("ServerID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetServerSettings Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetServerSettingsResultSet = function(resultStream) {
    GetServerSettingsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetServerSettings, choreography.Choreography);
util.inherits(GetServerSettingsInputSet, choreography.InputSet);
util.inherits(GetServerSettingsResultSet, choreography.ResultSet);
exports.GetServerSettings = GetServerSettings;


/*
    IndexDeployments
    Retrieve a list of server assets grouped within a particular RightScale Deployment. 
*/


var IndexDeployments = function(session) {
    /*
        Create a new instance of the IndexDeployments Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/IndexDeployments"
    IndexDeployments.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new IndexDeploymentsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new IndexDeploymentsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the IndexDeployments
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var IndexDeploymentsInputSet = function() {
    IndexDeploymentsInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Filter input for this Choreo. ((optional, string) An attributeName=AttributeValue filter pair. For example: nickname=mynick; OR description<>mydesc)
        */
        this.set_Filter = function(value) {
            this.setInput("Filter", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

        /*
        Set the value of the inputFile input for this Choreo. ()
        */

}

/*
A ResultSet with methods tailored to the values returned by the IndexDeployments Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var IndexDeploymentsResultSet = function(resultStream) {
    IndexDeploymentsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(IndexDeployments, choreography.Choreography);
util.inherits(IndexDeploymentsInputSet, choreography.InputSet);
util.inherits(IndexDeploymentsResultSet, choreography.ResultSet);
exports.IndexDeployments = IndexDeployments;


/*
    LaunchArrayInstance
    Start an array instance.
*/


var LaunchArrayInstance = function(session) {
    /*
        Create a new instance of the LaunchArrayInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/LaunchArrayInstance"
    LaunchArrayInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new LaunchArrayInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new LaunchArrayInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the LaunchArrayInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var LaunchArrayInstanceInputSet = function() {
    LaunchArrayInstanceInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerArrayID input for this Choreo. ((required, integer) The ID of a server array.)
        */
        this.set_ServerArrayID = function(value) {
            this.setInput("ServerArrayID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the LaunchArrayInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var LaunchArrayInstanceResultSet = function(resultStream) {
    LaunchArrayInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(LaunchArrayInstance, choreography.Choreography);
util.inherits(LaunchArrayInstanceInputSet, choreography.InputSet);
util.inherits(LaunchArrayInstanceResultSet, choreography.ResultSet);
exports.LaunchArrayInstance = LaunchArrayInstance;


/*
    ListAllOperationalArrayInstances
    List all operational instances in an array.
*/


var ListAllOperationalArrayInstances = function(session) {
    /*
        Create a new instance of the ListAllOperationalArrayInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/ListAllOperationalArrayInstances"
    ListAllOperationalArrayInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllOperationalArrayInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllOperationalArrayInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllOperationalArrayInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllOperationalArrayInstancesInputSet = function() {
    ListAllOperationalArrayInstancesInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerArrayID input for this Choreo. ((required, integer) The ID of a server array.)
        */
        this.set_ServerArrayID = function(value) {
            this.setInput("ServerArrayID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllOperationalArrayInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllOperationalArrayInstancesResultSet = function(resultStream) {
    ListAllOperationalArrayInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllOperationalArrayInstances, choreography.Choreography);
util.inherits(ListAllOperationalArrayInstancesInputSet, choreography.InputSet);
util.inherits(ListAllOperationalArrayInstancesResultSet, choreography.ResultSet);
exports.ListAllOperationalArrayInstances = ListAllOperationalArrayInstances;


/*
    RunRightScript
    Executes a specified RightScript.
*/


var RunRightScript = function(session) {
    /*
        Create a new instance of the RunRightScript Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/RunRightScript"
    RunRightScript.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RunRightScriptResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RunRightScriptInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RunRightScript
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RunRightScriptInputSet = function() {
    RunRightScriptInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the RightScriptID input for this Choreo. ((required, integer) The ID of the RightScript.)
        */
        this.set_RightScriptID = function(value) {
            this.setInput("RightScriptID", value);
        }

        /*
        Set the value of the ServerID input for this Choreo. ((required, integer) The RightScale Server ID that is to be stopped.)
        */
        this.set_ServerID = function(value) {
            this.setInput("ServerID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RunRightScript Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RunRightScriptResultSet = function(resultStream) {
    RunRightScriptResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RunRightScript, choreography.Choreography);
util.inherits(RunRightScriptInputSet, choreography.InputSet);
util.inherits(RunRightScriptResultSet, choreography.ResultSet);
exports.RunRightScript = RunRightScript;


/*
    ShowArray
    Display a comrephensive set of information about the querried array such as: server(s) state information, array templates used, array state, etc.
*/


var ShowArray = function(session) {
    /*
        Create a new instance of the ShowArray Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/ShowArray"
    ShowArray.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowArrayResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowArrayInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowArray
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowArrayInputSet = function() {
    ShowArrayInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerArrayID input for this Choreo. ((required, integer) The ID of a server array.)
        */
        this.set_ServerArrayID = function(value) {
            this.setInput("ServerArrayID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowArray Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowArrayResultSet = function(resultStream) {
    ShowArrayResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowArray, choreography.Choreography);
util.inherits(ShowArrayInputSet, choreography.InputSet);
util.inherits(ShowArrayResultSet, choreography.ResultSet);
exports.ShowArray = ShowArray;


/*
    ShowDeploymentIndex
    Retrieve a list of server assets grouped within a particular RightScale Deployment ID. 
*/


var ShowDeploymentIndex = function(session) {
    /*
        Create a new instance of the ShowDeploymentIndex Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/ShowDeploymentIndex"
    ShowDeploymentIndex.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowDeploymentIndexResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowDeploymentIndexInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowDeploymentIndex
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowDeploymentIndexInputSet = function() {
    ShowDeploymentIndexInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the DeploymentID input for this Choreo. ((required, integer) The DeploymentID to only list servers in this particular RightScale deployment.)
        */
        this.set_DeploymentID = function(value) {
            this.setInput("DeploymentID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerSettings input for this Choreo. ((optional, string) Display additional information about this RightScale deployment. Set True to enable.)
        */
        this.set_ServerSettings = function(value) {
            this.setInput("ServerSettings", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowDeploymentIndex Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowDeploymentIndexResultSet = function(resultStream) {
    ShowDeploymentIndexResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowDeploymentIndex, choreography.Choreography);
util.inherits(ShowDeploymentIndexInputSet, choreography.InputSet);
util.inherits(ShowDeploymentIndexResultSet, choreography.ResultSet);
exports.ShowDeploymentIndex = ShowDeploymentIndex;


/*
    ShowServer
    Display a comrephensive set of information about the querried server such as: state information, server templates used, SSH key href, etc.
*/


var ShowServer = function(session) {
    /*
        Create a new instance of the ShowServer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/ShowServer"
    ShowServer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowServerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowServerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowServer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowServerInputSet = function() {
    ShowServerInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerID input for this Choreo. ((required, integer) The RightScale Server ID that is to be stopped.)
        */
        this.set_ServerID = function(value) {
            this.setInput("ServerID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowServer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowServerResultSet = function(resultStream) {
    ShowServerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowServer, choreography.Choreography);
util.inherits(ShowServerInputSet, choreography.InputSet);
util.inherits(ShowServerResultSet, choreography.ResultSet);
exports.ShowServer = ShowServer;


/*
    ShowServerIndex
    Display an index of all servers in a RightScale account.
*/


var ShowServerIndex = function(session) {
    /*
        Create a new instance of the ShowServerIndex Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/ShowServerIndex"
    ShowServerIndex.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ShowServerIndexResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ShowServerIndexInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ShowServerIndex
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ShowServerIndexInputSet = function() {
    ShowServerIndexInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ShowServerIndex Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ShowServerIndexResultSet = function(resultStream) {
    ShowServerIndexResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ShowServerIndex, choreography.Choreography);
util.inherits(ShowServerIndexInputSet, choreography.InputSet);
util.inherits(ShowServerIndexResultSet, choreography.ResultSet);
exports.ShowServerIndex = ShowServerIndex;


/*
    StartServer
    Start a server associated with a particular Server ID.  Optionally, this Choreo can also poll the startup process and verify server startup.
*/


var StartServer = function(session) {
    /*
        Create a new instance of the StartServer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/StartServer"
    StartServer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StartServerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StartServerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StartServer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StartServerInputSet = function() {
    StartServerInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PollingTimeLimit input for this Choreo. ((optional, integer) Server status polling.  Enable by specifying a time limit - in minutes - for the duration of the server state polling.)
        */
        this.set_PollingTimeLimit = function(value) {
            this.setInput("PollingTimeLimit", value);
        }

        /*
        Set the value of the ServerID input for this Choreo. ((required, integer) The RightScale Server ID that is to be stopped.)
        */
        this.set_ServerID = function(value) {
            this.setInput("ServerID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StartServer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StartServerResultSet = function(resultStream) {
    StartServerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "State" output from this Choreo execution. ((string) The server 'state' parsed from the Rightscale response.)
        */
        this.get_State = function() {
            return this.getResult("State");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StartServer, choreography.Choreography);
util.inherits(StartServerInputSet, choreography.InputSet);
util.inherits(StartServerResultSet, choreography.ResultSet);
exports.StartServer = StartServer;


/*
    StopServer
    Stop a RightScale server instance. Optionally, this Choreo can also poll the stop process and verify server termination.
*/


var StopServer = function(session) {
    /*
        Create a new instance of the StopServer Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/StopServer"
    StopServer.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StopServerResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StopServerInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StopServer
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StopServerInputSet = function() {
    StopServerInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, integer) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the PollingTimeLimit input for this Choreo. ((optional, integer) Server status polling.  Enable by specifying a time limit - in minutes - for the duration of the server state polling.)
        */
        this.set_PollingTimeLimit = function(value) {
            this.setInput("PollingTimeLimit", value);
        }

        /*
        Set the value of the ServerID input for this Choreo. ((required, integer) The RightScale Server ID that is to be stopped.)
        */
        this.set_ServerID = function(value) {
            this.setInput("ServerID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StopServer Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StopServerResultSet = function(resultStream) {
    StopServerResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "State" output from this Choreo execution. ((string) The server 'state' parsed from the Rightscale response.)
        */
        this.get_State = function() {
            return this.getResult("State");
        }
}

util.inherits(StopServer, choreography.Choreography);
util.inherits(StopServerInputSet, choreography.InputSet);
util.inherits(StopServerResultSet, choreography.ResultSet);
exports.StopServer = StopServer;


/*
    TerminateArrayInstances
    Terminate an array instance.

*/


var TerminateArrayInstances = function(session) {
    /*
        Create a new instance of the TerminateArrayInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/RightScale/TerminateArrayInstances"
    TerminateArrayInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TerminateArrayInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TerminateArrayInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TerminateArrayInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TerminateArrayInstancesInputSet = function() {
    TerminateArrayInstancesInputSet.super_.call(this);
        /*
        Set the value of the AccountID input for this Choreo. ((required, string) The RightScale Account ID.)
        */
        this.set_AccountID = function(value) {
            this.setInput("AccountID", value);
        }

        /*
        Set the value of the Password input for this Choreo. ((required, password) The RightScale account password.)
        */
        this.set_Password = function(value) {
            this.setInput("Password", value);
        }

        /*
        Set the value of the ServerArrayID input for this Choreo. ((required, integer) The ID of a server array.)
        */
        this.set_ServerArrayID = function(value) {
            this.setInput("ServerArrayID", value);
        }

        /*
        Set the value of the Username input for this Choreo. ((required, string) The RightScale username.)
        */
        this.set_Username = function(value) {
            this.setInput("Username", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TerminateArrayInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TerminateArrayInstancesResultSet = function(resultStream) {
    TerminateArrayInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Rightscale in XML format.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TerminateArrayInstances, choreography.Choreography);
util.inherits(TerminateArrayInstancesInputSet, choreography.InputSet);
util.inherits(TerminateArrayInstancesResultSet, choreography.ResultSet);
exports.TerminateArrayInstances = TerminateArrayInstances;

