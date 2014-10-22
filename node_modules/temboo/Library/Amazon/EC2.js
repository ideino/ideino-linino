
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AllocateAddress
    Acquires an Elastic IP address for use with your AWS account.
*/


var AllocateAddress = function(session) {
    /*
        Create a new instance of the AllocateAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/AllocateAddress"
    AllocateAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AllocateAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AllocateAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AllocateAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AllocateAddressInputSet = function() {
    AllocateAddressInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Domain input for this Choreo. ((conditional, string) Set to "vpc" to allocate the address for use with instances in a VPC.)
        */
        this.set_Domain = function(value) {
            this.setInput("Domain", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AllocateAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AllocateAddressResultSet = function(resultStream) {
    AllocateAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AllocateAddress, choreography.Choreography);
util.inherits(AllocateAddressInputSet, choreography.InputSet);
util.inherits(AllocateAddressResultSet, choreography.ResultSet);
exports.AllocateAddress = AllocateAddress;


/*
    AssociateAddress
    Associates an Elastic IP address with an instance or a network interface.
*/


var AssociateAddress = function(session) {
    /*
        Create a new instance of the AssociateAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/AssociateAddress"
    AssociateAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AssociateAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AssociateAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AssociateAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AssociateAddressInputSet = function() {
    AssociateAddressInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AllocationId input for this Choreo. ((optional, string) [EC2-VPC] The allocation ID.  Required for a VPC.)
        */
        this.set_AllocationId = function(value) {
            this.setInput("AllocationId", value);
        }

        /*
        Set the value of the AllowReassociation input for this Choreo. ((optional, string) [EC2-VPC] Allows an Elastic IP address that is already associated with an instance or network interface to be re-associated with the specified instance or network interface. False if not specified.)
        */
        this.set_AllowReassociation = function(value) {
            this.setInput("AllowReassociation", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((conditional, string) The ID of the instance.  Required for EC2-Classic. For a VPC, you can specify either an instance ID or a network interface ID, but not both.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the NetworkInterfaceId input for this Choreo. ((optional, string) [EC2-VPC] The ID of the network interface. Association fails when specifying an instance ID unless exactly one interface is attached.)
        */
        this.set_NetworkInterfaceId = function(value) {
            this.setInput("NetworkInterfaceId", value);
        }

        /*
        Set the value of the PrivateIpAddress input for this Choreo. ((optional, string) [EC2-VPC] The primary or secondary private IP address to associate with the Elastic IP address. If nothing is specified, the Elastic IP address is associated with the primary private IP address.)
        */
        this.set_PrivateIpAddress = function(value) {
            this.setInput("PrivateIpAddress", value);
        }

        /*
        Set the value of the PublicIp input for this Choreo. ((conditional, string) The Elastic IP address.)
        */
        this.set_PublicIp = function(value) {
            this.setInput("PublicIp", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AssociateAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AssociateAddressResultSet = function(resultStream) {
    AssociateAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AssociateAddress, choreography.Choreography);
util.inherits(AssociateAddressInputSet, choreography.InputSet);
util.inherits(AssociateAddressResultSet, choreography.ResultSet);
exports.AssociateAddress = AssociateAddress;


/*
    AttachVolume
    Attaches an Amazon EBS volume to a running instance and exposes it as the specified device.
*/


var AttachVolume = function(session) {
    /*
        Create a new instance of the AttachVolume Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/AttachVolume"
    AttachVolume.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AttachVolumeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AttachVolumeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AttachVolume
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AttachVolumeInputSet = function() {
    AttachVolumeInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Device input for this Choreo. ((required, string) How the device is exposed to the instance (i.e. " /dev/sdh" or "xvdh").)
        */
        this.set_Device = function(value) {
            this.setInput("Device", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The ID of the instance to which the volume attaches. The volume and instance must be within the same Availability Zone and the instance must be running.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VolumeId input for this Choreo. ((required, string) The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running.)
        */
        this.set_VolumeId = function(value) {
            this.setInput("VolumeId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AttachVolume Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AttachVolumeResultSet = function(resultStream) {
    AttachVolumeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AttachVolume, choreography.Choreography);
util.inherits(AttachVolumeInputSet, choreography.InputSet);
util.inherits(AttachVolumeResultSet, choreography.ResultSet);
exports.AttachVolume = AttachVolume;


/*
    AuthorizeSecurityGroupIngress
    Adds an ingress rule to a security group.
*/


var AuthorizeSecurityGroupIngress = function(session) {
    /*
        Create a new instance of the AuthorizeSecurityGroupIngress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/AuthorizeSecurityGroupIngress"
    AuthorizeSecurityGroupIngress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AuthorizeSecurityGroupIngressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AuthorizeSecurityGroupIngressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AuthorizeSecurityGroupIngress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AuthorizeSecurityGroupIngressInputSet = function() {
    AuthorizeSecurityGroupIngressInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupId input for this Choreo. ((conditional, string) The ID of the security group to modify. Can be used instead of GroupName.)
        */
        this.set_GroupId = function(value) {
            this.setInput("GroupId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((conditional, string) The name of the security group to modify. Can be used instead of GroupId.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the IpPermissionsCidrIp input for this Choreo. ((optional, string) The CIDR range. Cannot be used when specifying a source security group.)
        */
        this.set_IpPermissionsCidrIp = function(value) {
            this.setInput("IpPermissionsCidrIp", value);
        }

        /*
        Set the value of the IpPermissionsFromPort input for this Choreo. ((optional, integer) The start of port range for the TCP and UDP protocols, or an ICMP type number. For the ICMP type number, you can use -1 to specify all ICMP types.)
        */
        this.set_IpPermissionsFromPort = function(value) {
            this.setInput("IpPermissionsFromPort", value);
        }

        /*
        Set the value of the IpPermissionsGroupId input for this Choreo. ((optional, string) The ID of the source security group. Cannot be used when specifying a CIDR IP address.)
        */
        this.set_IpPermissionsGroupId = function(value) {
            this.setInput("IpPermissionsGroupId", value);
        }

        /*
        Set the value of the IpPermissionsGroupName input for this Choreo. ((optional, string) The name of the source security group. Cannot be used when specifying a CIDR IP address.)
        */
        this.set_IpPermissionsGroupName = function(value) {
            this.setInput("IpPermissionsGroupName", value);
        }

        /*
        Set the value of the IpPermissionsIpProtocol input for this Choreo. ((required, string) The IP protocol name or number. Valid values for EC2-Classic: tcp, udp, icmp (or 6, 17, 1). Valid values for EC2-VPC: tcp, udp, icmp, any valid protocol number (0-254), or -1 (to specify all).)
        */
        this.set_IpPermissionsIpProtocol = function(value) {
            this.setInput("IpPermissionsIpProtocol", value);
        }

        /*
        Set the value of the IpPermissionsToPort input for this Choreo. ((optional, integer) The end of port range for the TCP and UDP protocols, or an ICMP code number. For the ICMP code number, you can use -1 to specify all ICMP codes for the given ICMP type.)
        */
        this.set_IpPermissionsToPort = function(value) {
            this.setInput("IpPermissionsToPort", value);
        }

        /*
        Set the value of the IpPermissionsUserId input for this Choreo. ((optional, string) The AWS account ID that owns the source security group. Cannot be used when specifying a CIDR IP address.)
        */
        this.set_IpPermissionsUserId = function(value) {
            this.setInput("IpPermissionsUserId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AuthorizeSecurityGroupIngress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AuthorizeSecurityGroupIngressResultSet = function(resultStream) {
    AuthorizeSecurityGroupIngressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AuthorizeSecurityGroupIngress, choreography.Choreography);
util.inherits(AuthorizeSecurityGroupIngressInputSet, choreography.InputSet);
util.inherits(AuthorizeSecurityGroupIngressResultSet, choreography.ResultSet);
exports.AuthorizeSecurityGroupIngress = AuthorizeSecurityGroupIngress;


/*
    CreateImage
    Creates an Amazon Machine Image from an Amazon EBS-backed instance. The image can be used later to launch other identical servers.
*/


var CreateImage = function(session) {
    /*
        Create a new instance of the CreateImage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/CreateImage"
    CreateImage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateImage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateImageInputSet = function() {
    CreateImageInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the DeleteOnTermination input for this Choreo. ((optional, boolean) Whether the volume is deleted on instance termination. Defaults to "true".)
        */
        this.set_DeleteOnTermination = function(value) {
            this.setInput("DeleteOnTermination", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description for the image you want to create.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the DeviceName input for this Choreo. ((conditional, string) The device name exposed to the instance (i.e. /dev/sdh or xvdh). When registering an AMI from a snapshot, DiviceName is required as well as SnapshotId.)
        */
        this.set_DeviceName = function(value) {
            this.setInput("DeviceName", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The ID of the instance to create the image on.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the Iops input for this Choreo. ((conditional, integer) The number of I/O operations per second (IOPS) that the volume supports. Valid range is 100 to 2000.)
        */
        this.set_Iops = function(value) {
            this.setInput("Iops", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) The name for the image you are creating.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NoDevice input for this Choreo. ((optional, boolean) Suppresses a device mapping. Defaults to "true".)
        */
        this.set_NoDevice = function(value) {
            this.setInput("NoDevice", value);
        }

        /*
        Set the value of the NoReboot input for this Choreo. ((optional, boolean) Defaults to "false". Amazon EC2 will attempt to shut down the instance before and after creating the image. Set to "true" for NoReboot.)
        */
        this.set_NoReboot = function(value) {
            this.setInput("NoReboot", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SnapshotId input for this Choreo. ((conditional, string) The ID of the snapshot. Required when registering from a snapshot. You must also specify DeviceName with the root device name.)
        */
        this.set_SnapshotId = function(value) {
            this.setInput("SnapshotId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VirtualName input for this Choreo. ((optional, string) The name of the virtual device.)
        */
        this.set_VirtualName = function(value) {
            this.setInput("VirtualName", value);
        }

        /*
        Set the value of the VolumeSize input for this Choreo. ((conditional, string) The size of the volume, in GiBs. Required unless you're creating the volume from a snapshot which indicates that the size will be the size of the snapshot.)
        */
        this.set_VolumeSize = function(value) {
            this.setInput("VolumeSize", value);
        }

        /*
        Set the value of the VolumeType input for this Choreo. ((optional, string) The volume type. Valid values are: standard (the default) and io1.)
        */
        this.set_VolumeType = function(value) {
            this.setInput("VolumeType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateImage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateImageResultSet = function(resultStream) {
    CreateImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateImage, choreography.Choreography);
util.inherits(CreateImageInputSet, choreography.InputSet);
util.inherits(CreateImageResultSet, choreography.ResultSet);
exports.CreateImage = CreateImage;


/*
    CreateKeyPair
    Creates a new 2048-bit RSA key pair with the specified name. 
*/


var CreateKeyPair = function(session) {
    /*
        Create a new instance of the CreateKeyPair Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/CreateKeyPair"
    CreateKeyPair.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateKeyPairResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateKeyPairInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateKeyPair
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateKeyPairInputSet = function() {
    CreateKeyPairInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((required, string) A unique name for the key pair.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateKeyPair Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateKeyPairResultSet = function(resultStream) {
    CreateKeyPairResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateKeyPair, choreography.Choreography);
util.inherits(CreateKeyPairInputSet, choreography.InputSet);
util.inherits(CreateKeyPairResultSet, choreography.ResultSet);
exports.CreateKeyPair = CreateKeyPair;


/*
    CreateSecurityGroup
    Creates a new EC2 security group.
*/


var CreateSecurityGroup = function(session) {
    /*
        Create a new instance of the CreateSecurityGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/CreateSecurityGroup"
    CreateSecurityGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSecurityGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSecurityGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSecurityGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSecurityGroupInputSet = function() {
    CreateSecurityGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupDescription input for this Choreo. ((required, string) A description for the security group that that you want to create.)
        */
        this.set_GroupDescription = function(value) {
            this.setInput("GroupDescription", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((required, string) A name for the security group to create.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VpcId input for this Choreo. ((optional, string) The ID of the VPC. Required for EC2-VPC.)
        */
        this.set_VpcId = function(value) {
            this.setInput("VpcId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateSecurityGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSecurityGroupResultSet = function(resultStream) {
    CreateSecurityGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateSecurityGroup, choreography.Choreography);
util.inherits(CreateSecurityGroupInputSet, choreography.InputSet);
util.inherits(CreateSecurityGroupResultSet, choreography.ResultSet);
exports.CreateSecurityGroup = CreateSecurityGroup;


/*
    CreateSnapshot
    Create a snapshot from a specified EBS volume.
*/


var CreateSnapshot = function(session) {
    /*
        Create a new instance of the CreateSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/CreateSnapshot"
    CreateSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateSnapshotInputSet = function() {
    CreateSnapshotInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) A description for the volume that you want to create.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VolumeId input for this Choreo. ((required, string) The id of the EBS volume to snapshot.)
        */
        this.set_VolumeId = function(value) {
            this.setInput("VolumeId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateSnapshotResultSet = function(resultStream) {
    CreateSnapshotResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateSnapshot, choreography.Choreography);
util.inherits(CreateSnapshotInputSet, choreography.InputSet);
util.inherits(CreateSnapshotResultSet, choreography.ResultSet);
exports.CreateSnapshot = CreateSnapshot;


/*
    CreateTags
    Adds or overwrites one or more tags for the specified EC2 resource or resources.
*/


var CreateTags = function(session) {
    /*
        Create a new instance of the CreateTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/CreateTags"
    CreateTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateTagsInputSet = function() {
    CreateTagsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResourceId input for this Choreo. ((required, string) The ID of a resource to tag. This can be a comma-separated list of up to 10  Resource IDs.)
        */
        this.set_ResourceId = function(value) {
            this.setInput("ResourceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TagKey input for this Choreo. ((required, string) The key for a tag.)
        */
        this.set_TagKey = function(value) {
            this.setInput("TagKey", value);
        }

        /*
        Set the value of the TagValue input for this Choreo. ((conditional, string) The value for a tag. If empty, the value will be set to be an empty string.)
        */
        this.set_TagValue = function(value) {
            this.setInput("TagValue", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateTagsResultSet = function(resultStream) {
    CreateTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateTags, choreography.Choreography);
util.inherits(CreateTagsInputSet, choreography.InputSet);
util.inherits(CreateTagsResultSet, choreography.ResultSet);
exports.CreateTags = CreateTags;


/*
    CreateVolume
    Creates a new EBS volume that your EC2 instance can attach to.
*/


var CreateVolume = function(session) {
    /*
        Create a new instance of the CreateVolume Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/CreateVolume"
    CreateVolume.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateVolumeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateVolumeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateVolume
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateVolumeInputSet = function() {
    CreateVolumeInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AvailabilityZone input for this Choreo. ((required, string) The Availability Zone to use when creating thew new volume (i.e us-east-1a).)
        */
        this.set_AvailabilityZone = function(value) {
            this.setInput("AvailabilityZone", value);
        }

        /*
        Set the value of the Iops input for this Choreo. ((optional, integer) The number of I/O operations per second (IOPS) that the volume supports. Valid range is 100 to 2000. Required when the volume type is io1.)
        */
        this.set_Iops = function(value) {
            this.setInput("Iops", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the Size input for this Choreo. ((conditional, integer) The size for the volume (in gigabytes) that you are creating. Valid Values are 1-1024. Required if you're not creating a volume from a snapshot. If the volume type is io1, the min size is 10 GiB.)
        */
        this.set_Size = function(value) {
            this.setInput("Size", value);
        }

        /*
        Set the value of the SnapshotId input for this Choreo. ((conditional, string) The snapshot from which to create the new volume. Required if you are creating a volume from a snapshot.)
        */
        this.set_SnapshotId = function(value) {
            this.setInput("SnapshotId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VolumeType input for this Choreo. ((optional, string) The volume type.Valid values are: "standard" (the default) and "io1".)
        */
        this.set_VolumeType = function(value) {
            this.setInput("VolumeType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateVolume Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateVolumeResultSet = function(resultStream) {
    CreateVolumeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateVolume, choreography.Choreography);
util.inherits(CreateVolumeInputSet, choreography.InputSet);
util.inherits(CreateVolumeResultSet, choreography.ResultSet);
exports.CreateVolume = CreateVolume;


/*
    DeleteKeyPair
    Deletes the specified key pair by removing the public key from Amazon EC2. You must own the key pair.
*/


var DeleteKeyPair = function(session) {
    /*
        Create a new instance of the DeleteKeyPair Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DeleteKeyPair"
    DeleteKeyPair.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteKeyPairResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteKeyPairInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteKeyPair
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteKeyPairInputSet = function() {
    DeleteKeyPairInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((required, string) A unique name for the key pair.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteKeyPair Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteKeyPairResultSet = function(resultStream) {
    DeleteKeyPairResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteKeyPair, choreography.Choreography);
util.inherits(DeleteKeyPairInputSet, choreography.InputSet);
util.inherits(DeleteKeyPairResultSet, choreography.ResultSet);
exports.DeleteKeyPair = DeleteKeyPair;


/*
    DeleteSecurityGroup
    Deletes a security group using the group name you specify.
*/


var DeleteSecurityGroup = function(session) {
    /*
        Create a new instance of the DeleteSecurityGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DeleteSecurityGroup"
    DeleteSecurityGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteSecurityGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteSecurityGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteSecurityGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteSecurityGroupInputSet = function() {
    DeleteSecurityGroupInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupId input for this Choreo. ((conditional, string) The id of the security group to delete. Required unless providing the GroupName.)
        */
        this.set_GroupId = function(value) {
            this.setInput("GroupId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((conditional, string) The name of the security group to delete.Required unless providing the GroupId.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, any) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteSecurityGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteSecurityGroupResultSet = function(resultStream) {
    DeleteSecurityGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteSecurityGroup, choreography.Choreography);
util.inherits(DeleteSecurityGroupInputSet, choreography.InputSet);
util.inherits(DeleteSecurityGroupResultSet, choreography.ResultSet);
exports.DeleteSecurityGroup = DeleteSecurityGroup;


/*
    DeleteSnapshot
    Deletes a snapshot using a snapshot id that you specify.
*/


var DeleteSnapshot = function(session) {
    /*
        Create a new instance of the DeleteSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DeleteSnapshot"
    DeleteSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteSnapshotInputSet = function() {
    DeleteSnapshotInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SnapshotId input for this Choreo. ((required, string) The id of the snapshot to delete.)
        */
        this.set_SnapshotId = function(value) {
            this.setInput("SnapshotId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteSnapshotResultSet = function(resultStream) {
    DeleteSnapshotResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteSnapshot, choreography.Choreography);
util.inherits(DeleteSnapshotInputSet, choreography.InputSet);
util.inherits(DeleteSnapshotResultSet, choreography.ResultSet);
exports.DeleteSnapshot = DeleteSnapshot;


/*
    DeleteTags
    Deletes a specific set of tags from a specific set of resources.
*/


var DeleteTags = function(session) {
    /*
        Create a new instance of the DeleteTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DeleteTags"
    DeleteTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteTagsInputSet = function() {
    DeleteTagsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResourceId input for this Choreo. ((required, string) The ID of a resource to tag. This can be a comma-separated list of up to 10  Resource IDs.)
        */
        this.set_ResourceId = function(value) {
            this.setInput("ResourceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the TagKey input for this Choreo. ((required, string) The key for a tag.)
        */
        this.set_TagKey = function(value) {
            this.setInput("TagKey", value);
        }

        /*
        Set the value of the TagValue input for this Choreo. ((optional, string) Indicates a tag should be deleted only if the value matches.To delete a tag regardless of its value, leave this blank. To delete a tag with an empty string value (""), pass the string value "null".)
        */
        this.set_TagValue = function(value) {
            this.setInput("TagValue", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteTagsResultSet = function(resultStream) {
    DeleteTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteTags, choreography.Choreography);
util.inherits(DeleteTagsInputSet, choreography.InputSet);
util.inherits(DeleteTagsResultSet, choreography.ResultSet);
exports.DeleteTags = DeleteTags;


/*
    DeleteVolume
    Deletes a volume using a volume id that you specify.
*/


var DeleteVolume = function(session) {
    /*
        Create a new instance of the DeleteVolume Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DeleteVolume"
    DeleteVolume.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteVolumeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteVolumeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteVolume
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteVolumeInputSet = function() {
    DeleteVolumeInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VolumeId input for this Choreo. ((required, string) The id of the volume to delete.)
        */
        this.set_VolumeId = function(value) {
            this.setInput("VolumeId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteVolume Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteVolumeResultSet = function(resultStream) {
    DeleteVolumeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteVolume, choreography.Choreography);
util.inherits(DeleteVolumeInputSet, choreography.InputSet);
util.inherits(DeleteVolumeResultSet, choreography.ResultSet);
exports.DeleteVolume = DeleteVolume;


/*
    DeregisterImage
    Deregisters the specified AMI.
*/


var DeregisterImage = function(session) {
    /*
        Create a new instance of the DeregisterImage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DeregisterImage"
    DeregisterImage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeregisterImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeregisterImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeregisterImage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeregisterImageInputSet = function() {
    DeregisterImageInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ImageId input for this Choreo. ((required, string) The AMI ID.)
        */
        this.set_ImageId = function(value) {
            this.setInput("ImageId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeregisterImage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeregisterImageResultSet = function(resultStream) {
    DeregisterImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeregisterImage, choreography.Choreography);
util.inherits(DeregisterImageInputSet, choreography.InputSet);
util.inherits(DeregisterImageResultSet, choreography.ResultSet);
exports.DeregisterImage = DeregisterImage;


/*
    DescribeAddresses
    Describes one or more of your Elastic IP addresses.
*/


var DescribeAddresses = function(session) {
    /*
        Create a new instance of the DescribeAddresses Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeAddresses"
    DescribeAddresses.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeAddressesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeAddressesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeAddresses
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeAddressesInputSet = function() {
    DescribeAddressesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AllocationId input for this Choreo. ((optional, string) One or more allocation IDs corresponding to the address or addresses to describe (VPC addresses only). This can be a comma-separated list of up to 10 Allocation Ids.)
        */
        this.set_AllocationId = function(value) {
            this.setInput("AllocationId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow the results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the PublicIp input for this Choreo. ((optional, string) One or more EC2 Elastic IP addresses.  This can be a comma-separated list of up to 10 IP addresses.)
        */
        this.set_PublicIp = function(value) {
            this.setInput("PublicIp", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeAddresses Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeAddressesResultSet = function(resultStream) {
    DescribeAddressesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeAddresses, choreography.Choreography);
util.inherits(DescribeAddressesInputSet, choreography.InputSet);
util.inherits(DescribeAddressesResultSet, choreography.ResultSet);
exports.DescribeAddresses = DescribeAddresses;


/*
    DescribeAvailabilityZones
    Returns Availability Zones that are available for your EC2 account.
*/


var DescribeAvailabilityZones = function(session) {
    /*
        Create a new instance of the DescribeAvailabilityZones Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeAvailabilityZones"
    DescribeAvailabilityZones.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeAvailabilityZonesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeAvailabilityZonesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeAvailabilityZones
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeAvailabilityZonesInputSet = function() {
    DescribeAvailabilityZonesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the ZoneName input for this Choreo. ((optional, string) One or more Availability Zones.  This can be a comma-separated list of up to 10 instance Zones.)
        */
        this.set_ZoneName = function(value) {
            this.setInput("ZoneName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeAvailabilityZones Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeAvailabilityZonesResultSet = function(resultStream) {
    DescribeAvailabilityZonesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeAvailabilityZones, choreography.Choreography);
util.inherits(DescribeAvailabilityZonesInputSet, choreography.InputSet);
util.inherits(DescribeAvailabilityZonesResultSet, choreography.ResultSet);
exports.DescribeAvailabilityZones = DescribeAvailabilityZones;


/*
    DescribeImageAttribute
    Retrieves information about an attribute of an AMI.
*/


var DescribeImageAttribute = function(session) {
    /*
        Create a new instance of the DescribeImageAttribute Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeImageAttribute"
    DescribeImageAttribute.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeImageAttributeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeImageAttributeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeImageAttribute
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeImageAttributeInputSet = function() {
    DescribeImageAttributeInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Attribute input for this Choreo. ((required, string) The AMI attribute to get. Valid Values are: description | kernel | ramdisk | launchPermission | productCodes | blockDeviceMapping.)
        */
        this.set_Attribute = function(value) {
            this.setInput("Attribute", value);
        }

        /*
        Set the value of the ImageId input for this Choreo. ((required, string) The AMI ID.)
        */
        this.set_ImageId = function(value) {
            this.setInput("ImageId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeImageAttribute Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeImageAttributeResultSet = function(resultStream) {
    DescribeImageAttributeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeImageAttribute, choreography.Choreography);
util.inherits(DescribeImageAttributeInputSet, choreography.InputSet);
util.inherits(DescribeImageAttributeResultSet, choreography.ResultSet);
exports.DescribeImageAttribute = DescribeImageAttribute;


/*
    DescribeImages
    Returns information about Amazon Machine Image(s) that are available to you.
*/


var DescribeImages = function(session) {
    /*
        Create a new instance of the DescribeImages Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeImages"
    DescribeImages.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeImagesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeImagesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeImages
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeImagesInputSet = function() {
    DescribeImagesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the ExecutableBy input for this Choreo. ((optional, string) The user ID that has explicit launch permissions. The user ID can be an AWS account ID, "self", or "all" to return AMIs with public launch permissions.)
        */
        this.set_ExecutableBy = function(value) {
            this.setInput("ExecutableBy", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the ImageId input for this Choreo. ((conditional, string) The ID of the AMI that you want to return. Returns all AMIs when this parameter is not specified.)
        */
        this.set_ImageId = function(value) {
            this.setInput("ImageId", value);
        }

        /*
        Set the value of the Owner input for this Choreo. ((conditional, string) The IDs "amazon", "aws-marketplace", and "self" can be used to include AMIs owned by Amazon, AWS Marketplace, or AMIs owned by you, respectively.)
        */
        this.set_Owner = function(value) {
            this.setInput("Owner", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeImages Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeImagesResultSet = function(resultStream) {
    DescribeImagesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeImages, choreography.Choreography);
util.inherits(DescribeImagesInputSet, choreography.InputSet);
util.inherits(DescribeImagesResultSet, choreography.ResultSet);
exports.DescribeImages = DescribeImages;


/*
    DescribeInstances
    Returns information on EC2 instances associated with your AWS account.
*/


var DescribeInstances = function(session) {
    /*
        Create a new instance of the DescribeInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeInstances"
    DescribeInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeInstancesInputSet = function() {
    DescribeInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((optional, string) The ID(s) of the instance(s) you want to monitor. This can be a comma-separated list of up to 10 instance IDs.  Returns all instances if this parameter is not specified.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeInstancesResultSet = function(resultStream) {
    DescribeInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeInstances, choreography.Choreography);
util.inherits(DescribeInstancesInputSet, choreography.InputSet);
util.inherits(DescribeInstancesResultSet, choreography.ResultSet);
exports.DescribeInstances = DescribeInstances;


/*
    DescribeKeyPairs
    Describes one or more of your key pairs.
*/


var DescribeKeyPairs = function(session) {
    /*
        Create a new instance of the DescribeKeyPairs Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeKeyPairs"
    DescribeKeyPairs.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeKeyPairsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeKeyPairsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeKeyPairs
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeKeyPairsInputSet = function() {
    DescribeKeyPairsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow the results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((optional, string) One or more key pair names to return. This can be a comma-separated list of up to 10 key pair namess.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeKeyPairs Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeKeyPairsResultSet = function(resultStream) {
    DescribeKeyPairsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeKeyPairs, choreography.Choreography);
util.inherits(DescribeKeyPairsInputSet, choreography.InputSet);
util.inherits(DescribeKeyPairsResultSet, choreography.ResultSet);
exports.DescribeKeyPairs = DescribeKeyPairs;


/*
    DescribeRegions
    Describes one or more regions that are currently available to you.
*/


var DescribeRegions = function(session) {
    /*
        Create a new instance of the DescribeRegions Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeRegions"
    DescribeRegions.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeRegionsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeRegionsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeRegions
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeRegionsInputSet = function() {
    DescribeRegionsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the RegionName input for this Choreo. ((optional, string) One or more region names. This can be a comma-separated list of up to 10 region names.)
        */
        this.set_RegionName = function(value) {
            this.setInput("RegionName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeRegions Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeRegionsResultSet = function(resultStream) {
    DescribeRegionsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeRegions, choreography.Choreography);
util.inherits(DescribeRegionsInputSet, choreography.InputSet);
util.inherits(DescribeRegionsResultSet, choreography.ResultSet);
exports.DescribeRegions = DescribeRegions;


/*
    DescribeSecurityGroups
    Returns security group information associated with your AWS Account.
*/


var DescribeSecurityGroups = function(session) {
    /*
        Create a new instance of the DescribeSecurityGroups Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeSecurityGroups"
    DescribeSecurityGroups.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeSecurityGroupsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeSecurityGroupsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeSecurityGroups
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeSecurityGroupsInputSet = function() {
    DescribeSecurityGroupsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the GroupId input for this Choreo. ((optional, string) One or more security group IDs.  This can be a comma-separated list of up to 10 GroupIDs.  If no group names nor group IDs supplied, returns all groups.)
        */
        this.set_GroupId = function(value) {
            this.setInput("GroupId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((optional, string) One or more security group names. This can be a comma-separated list of up to 10 group names.  If no group names nor group IDs supplied, returns all groups.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeSecurityGroups Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeSecurityGroupsResultSet = function(resultStream) {
    DescribeSecurityGroupsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeSecurityGroups, choreography.Choreography);
util.inherits(DescribeSecurityGroupsInputSet, choreography.InputSet);
util.inherits(DescribeSecurityGroupsResultSet, choreography.ResultSet);
exports.DescribeSecurityGroups = DescribeSecurityGroups;


/*
    DescribeSnapshots
    Returns information on available Amazon EBS snapshots.
*/


var DescribeSnapshots = function(session) {
    /*
        Create a new instance of the DescribeSnapshots Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeSnapshots"
    DescribeSnapshots.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeSnapshotsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeSnapshotsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeSnapshots
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeSnapshotsInputSet = function() {
    DescribeSnapshotsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the Owner input for this Choreo. ((conditional, string) Returns the snapshots owned by the specified owner. Valid values are: "self" (the default), "amazon", or an AWS Account ID.)
        */
        this.set_Owner = function(value) {
            this.setInput("Owner", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RestorableBy input for this Choreo. ((optional, string) AWS accounts ID that can create volumes from the snapshot.)
        */
        this.set_RestorableBy = function(value) {
            this.setInput("RestorableBy", value);
        }

        /*
        Set the value of the SnapshotId input for this Choreo. ((optional, string) The ID of the snapshot you want to retrieve. Returns all snapshots if not specified.)
        */
        this.set_SnapshotId = function(value) {
            this.setInput("SnapshotId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeSnapshots Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeSnapshotsResultSet = function(resultStream) {
    DescribeSnapshotsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeSnapshots, choreography.Choreography);
util.inherits(DescribeSnapshotsInputSet, choreography.InputSet);
util.inherits(DescribeSnapshotsResultSet, choreography.ResultSet);
exports.DescribeSnapshots = DescribeSnapshots;


/*
    DescribeTags
    Describes one or more of the tags for your EC2 resources. 
*/


var DescribeTags = function(session) {
    /*
        Create a new instance of the DescribeTags Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeTags"
    DescribeTags.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeTagsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeTagsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeTags
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeTagsInputSet = function() {
    DescribeTagsInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeTags Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeTagsResultSet = function(resultStream) {
    DescribeTagsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeTags, choreography.Choreography);
util.inherits(DescribeTagsInputSet, choreography.InputSet);
util.inherits(DescribeTagsResultSet, choreography.ResultSet);
exports.DescribeTags = DescribeTags;


/*
    DescribeVolumes
    Returns information for one or more of your Amazon EBS volumes.
*/


var DescribeVolumes = function(session) {
    /*
        Create a new instance of the DescribeVolumes Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DescribeVolumes"
    DescribeVolumes.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeVolumesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeVolumesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeVolumes
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeVolumesInputSet = function() {
    DescribeVolumesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the FilterName input for this Choreo. ((optional, string) The name of a supported filter to narrow results with.)
        */
        this.set_FilterName = function(value) {
            this.setInput("FilterName", value);
        }

        /*
        Set the value of the FilterValue input for this Choreo. ((optional, string) A value for the specified filter.)
        */
        this.set_FilterValue = function(value) {
            this.setInput("FilterValue", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VolumeId input for this Choreo. ((conditional, string) The ID of the volume to return. This can be a comma-separated list of up to 10 volume IDs.)
        */
        this.set_VolumeId = function(value) {
            this.setInput("VolumeId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeVolumes Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeVolumesResultSet = function(resultStream) {
    DescribeVolumesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeVolumes, choreography.Choreography);
util.inherits(DescribeVolumesInputSet, choreography.InputSet);
util.inherits(DescribeVolumesResultSet, choreography.ResultSet);
exports.DescribeVolumes = DescribeVolumes;


/*
    DetachVolume
    Detaches an Amazon EBS volume from an instance.
*/


var DetachVolume = function(session) {
    /*
        Create a new instance of the DetachVolume Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DetachVolume"
    DetachVolume.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DetachVolumeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DetachVolumeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DetachVolume
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DetachVolumeInputSet = function() {
    DetachVolumeInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Device input for this Choreo. ((optional, string) The device name.)
        */
        this.set_Device = function(value) {
            this.setInput("Device", value);
        }

        /*
        Set the value of the Force input for this Choreo. ((required, boolean) Forces detachment if the previous detachment attempt did not occur cleanly. Use this option only as a last resort to detach a volume from a failed instance. Defaults to false.)
        */
        this.set_Force = function(value) {
            this.setInput("Force", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((optional, string) The ID of the instance.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VolumeId input for this Choreo. ((required, string) The ID of the volume.)
        */
        this.set_VolumeId = function(value) {
            this.setInput("VolumeId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DetachVolume Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DetachVolumeResultSet = function(resultStream) {
    DetachVolumeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DetachVolume, choreography.Choreography);
util.inherits(DetachVolumeInputSet, choreography.InputSet);
util.inherits(DetachVolumeResultSet, choreography.ResultSet);
exports.DetachVolume = DetachVolume;


/*
    DisassociateAddress
    Disassociates an Elastic IP address from the instance or network interface it's associated with.
*/


var DisassociateAddress = function(session) {
    /*
        Create a new instance of the DisassociateAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/DisassociateAddress"
    DisassociateAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DisassociateAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DisassociateAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DisassociateAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DisassociateAddressInputSet = function() {
    DisassociateAddressInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AssociationId input for this Choreo. ((conditional, string) [EC2-VPC] The association ID corresponding to the Elastic IP address.)
        */
        this.set_AssociationId = function(value) {
            this.setInput("AssociationId", value);
        }

        /*
        Set the value of the PublicIp input for this Choreo. ((conditional, string) [EC2-Classic] The Elastic IP address.)
        */
        this.set_PublicIp = function(value) {
            this.setInput("PublicIp", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DisassociateAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DisassociateAddressResultSet = function(resultStream) {
    DisassociateAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DisassociateAddress, choreography.Choreography);
util.inherits(DisassociateAddressInputSet, choreography.InputSet);
util.inherits(DisassociateAddressResultSet, choreography.ResultSet);
exports.DisassociateAddress = DisassociateAddress;


/*
    ImportKeyPair
    Imports the public key from an RSA key pair that you created with a third-party tool.
*/


var ImportKeyPair = function(session) {
    /*
        Create a new instance of the ImportKeyPair Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/ImportKeyPair"
    ImportKeyPair.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ImportKeyPairResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ImportKeyPairInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ImportKeyPair
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ImportKeyPairInputSet = function() {
    ImportKeyPairInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((required, string) A unique name for the key pair.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

        /*
        Set the value of the PublicKeyMaterial input for this Choreo. ((required, string) The public key. You must Base64-encode the public key material before sending it to AWS.)
        */
        this.set_PublicKeyMaterial = function(value) {
            this.setInput("PublicKeyMaterial", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ImportKeyPair Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ImportKeyPairResultSet = function(resultStream) {
    ImportKeyPairResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ImportKeyPair, choreography.Choreography);
util.inherits(ImportKeyPairInputSet, choreography.InputSet);
util.inherits(ImportKeyPairResultSet, choreography.ResultSet);
exports.ImportKeyPair = ImportKeyPair;


/*
    ModifyImageAttribute
    Modifies an attribute of an AMI.
*/


var ModifyImageAttribute = function(session) {
    /*
        Create a new instance of the ModifyImageAttribute Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/ModifyImageAttribute"
    ModifyImageAttribute.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ModifyImageAttributeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ModifyImageAttributeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ModifyImageAttribute
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ModifyImageAttributeInputSet = function() {
    ModifyImageAttributeInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AddGroup input for this Choreo. ((optional, string) Adds the specified group to the image's list of launch permissions. The only valid value is "all".)
        */
        this.set_AddGroup = function(value) {
            this.setInput("AddGroup", value);
        }

        /*
        Set the value of the AddUserId input for this Choreo. ((optional, string) Adds the specified AWS account ID to the AMI's list of launch permissions.)
        */
        this.set_AddUserId = function(value) {
            this.setInput("AddUserId", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) Changes the AMI's description to the specified value.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the ImageId input for this Choreo. ((required, string) The AMI ID.)
        */
        this.set_ImageId = function(value) {
            this.setInput("ImageId", value);
        }

        /*
        Set the value of the ProductCode input for this Choreo. ((optional, string) Adds the specified product code to the specified Amazon S3-backed AMI. Once you add a product code to an AMI, it can't be removed.)
        */
        this.set_ProductCode = function(value) {
            this.setInput("ProductCode", value);
        }

        /*
        Set the value of the RemoveGroup input for this Choreo. ((optional, string) Removes the specified group from the image's list of launch permissions. The only valid value is "all".)
        */
        this.set_RemoveGroup = function(value) {
            this.setInput("RemoveGroup", value);
        }

        /*
        Set the value of the RemoveUserId input for this Choreo. ((optional, string) Removes the specified AWS account ID from the AMI's list of launch permissions.)
        */
        this.set_RemoveUserId = function(value) {
            this.setInput("RemoveUserId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ModifyImageAttribute Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ModifyImageAttributeResultSet = function(resultStream) {
    ModifyImageAttributeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ModifyImageAttribute, choreography.Choreography);
util.inherits(ModifyImageAttributeInputSet, choreography.InputSet);
util.inherits(ModifyImageAttributeResultSet, choreography.ResultSet);
exports.ModifyImageAttribute = ModifyImageAttribute;


/*
    MonitorInstances
    Enable monitoring for a specified instance.
*/


var MonitorInstances = function(session) {
    /*
        Create a new instance of the MonitorInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/MonitorInstances"
    MonitorInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new MonitorInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new MonitorInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the MonitorInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var MonitorInstancesInputSet = function() {
    MonitorInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The ID(s) of the instance(s) you want to monitor. This can be a comma-separated list of up to 10 instance IDs.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the MonitorInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var MonitorInstancesResultSet = function(resultStream) {
    MonitorInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(MonitorInstances, choreography.Choreography);
util.inherits(MonitorInstancesInputSet, choreography.InputSet);
util.inherits(MonitorInstancesResultSet, choreography.ResultSet);
exports.MonitorInstances = MonitorInstances;


/*
    RebootInstances
    Reboot an instance by specifying the instance id.
*/


var RebootInstances = function(session) {
    /*
        Create a new instance of the RebootInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/RebootInstances"
    RebootInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RebootInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RebootInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RebootInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RebootInstancesInputSet = function() {
    RebootInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The ID of the instance to reboot. This can be a comma-separated list of up to 10 instance IDs.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RebootInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RebootInstancesResultSet = function(resultStream) {
    RebootInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RebootInstances, choreography.Choreography);
util.inherits(RebootInstancesInputSet, choreography.InputSet);
util.inherits(RebootInstancesResultSet, choreography.ResultSet);
exports.RebootInstances = RebootInstances;


/*
    RegisterImage
    Registers a new AMI with Amazon EC2.
*/


var RegisterImage = function(session) {
    /*
        Create a new instance of the RegisterImage Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/RegisterImage"
    RegisterImage.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RegisterImageResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RegisterImageInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RegisterImage
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RegisterImageInputSet = function() {
    RegisterImageInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the Architecture input for this Choreo. ((optional, string) The architecture of the image. Valid values are: i386 or x86_64. Defaults to i386.)
        */
        this.set_Architecture = function(value) {
            this.setInput("Architecture", value);
        }

        /*
        Set the value of the DeleteOnTermination input for this Choreo. ((optional, boolean) Whether the Amazon EBS volume is deleted on instance termination. Defaults to true.)
        */
        this.set_DeleteOnTermination = function(value) {
            this.setInput("DeleteOnTermination", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) The description of the AMI.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the DeviceName input for this Choreo. ((conditional, string) If registering an Amazon EBS-backed AMI from a snapshot, specify this input with the root device name (e.g., /dev/sda1, or xvda), and SnapshotId.)
        */
        this.set_DeviceName = function(value) {
            this.setInput("DeviceName", value);
        }

        /*
        Set the value of the ImageLocation input for this Choreo. ((conditional, string) Full path to your AMI manifest in Amazon S3 storage. Required if registering an Amazon-S3 backed AMI.)
        */
        this.set_ImageLocation = function(value) {
            this.setInput("ImageLocation", value);
        }

        /*
        Set the value of the Iops input for this Choreo. ((conditional, integer) The number of I/O operations per second (IOPS) that the volume supports. A valid range is: 100 to 2000.)
        */
        this.set_Iops = function(value) {
            this.setInput("Iops", value);
        }

        /*
        Set the value of the KernelId input for this Choreo. ((optional, string) The ID of the kernel to select.)
        */
        this.set_KernelId = function(value) {
            this.setInput("KernelId", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((required, string) A name for your AMI.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the NoDevice input for this Choreo. ((optional, boolean) Specifies that no device should be mapped. Defaults to 1 (true).)
        */
        this.set_NoDevice = function(value) {
            this.setInput("NoDevice", value);
        }

        /*
        Set the value of the RamdiskId input for this Choreo. ((optional, string) The ID of the RAM disk to select.)
        */
        this.set_RamdiskId = function(value) {
            this.setInput("RamdiskId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the RootDeviceName input for this Choreo. ((conditional, string) The root device name (e.g., /dev/sda1, or xvda). Required if registering an Amazon EBS-backed AMI.)
        */
        this.set_RootDeviceName = function(value) {
            this.setInput("RootDeviceName", value);
        }

        /*
        Set the value of the SnapshotId input for this Choreo. ((conditional, string) If registering an Amazon EBS-backed AMI from a snapshot, you must at least specify this input with the snapshot ID, and DeviceName with the root device name.)
        */
        this.set_SnapshotId = function(value) {
            this.setInput("SnapshotId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VirtualName input for this Choreo. ((optional, string) The virtual device name.)
        */
        this.set_VirtualName = function(value) {
            this.setInput("VirtualName", value);
        }

        /*
        Set the value of the VolumeSize input for this Choreo. ((conditional, integer) The size of the volume, in GiBs. Required if you are not creating a volume from a snapshot.)
        */
        this.set_VolumeSize = function(value) {
            this.setInput("VolumeSize", value);
        }

        /*
        Set the value of the VolumeType input for this Choreo. ((optional, string) The volume type. Valid values are: standard and io.)
        */
        this.set_VolumeType = function(value) {
            this.setInput("VolumeType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RegisterImage Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RegisterImageResultSet = function(resultStream) {
    RegisterImageResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RegisterImage, choreography.Choreography);
util.inherits(RegisterImageInputSet, choreography.InputSet);
util.inherits(RegisterImageResultSet, choreography.ResultSet);
exports.RegisterImage = RegisterImage;


/*
    ReleaseAddress
    Releases an Elastic IP address allocated to your account.
*/


var ReleaseAddress = function(session) {
    /*
        Create a new instance of the ReleaseAddress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/ReleaseAddress"
    ReleaseAddress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReleaseAddressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReleaseAddressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReleaseAddress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReleaseAddressInputSet = function() {
    ReleaseAddressInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the AllocationId input for this Choreo. ((conditional, string) [EC2-VPC] The allocation ID that AWS provided when you allocated the address for use with a VPC.)
        */
        this.set_AllocationId = function(value) {
            this.setInput("AllocationId", value);
        }

        /*
        Set the value of the PublicIp input for this Choreo. ((conditional, string) [EC2-Classic] The Elastic IP address.)
        */
        this.set_PublicIp = function(value) {
            this.setInput("PublicIp", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReleaseAddress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReleaseAddressResultSet = function(resultStream) {
    ReleaseAddressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReleaseAddress, choreography.Choreography);
util.inherits(ReleaseAddressInputSet, choreography.InputSet);
util.inherits(ReleaseAddressResultSet, choreography.ResultSet);
exports.ReleaseAddress = ReleaseAddress;


/*
    RevokeSecurityGroupIngress
    Removes one or more ingress rules from a security group.
*/


var RevokeSecurityGroupIngress = function(session) {
    /*
        Create a new instance of the RevokeSecurityGroupIngress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/RevokeSecurityGroupIngress"
    RevokeSecurityGroupIngress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RevokeSecurityGroupIngressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RevokeSecurityGroupIngressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RevokeSecurityGroupIngress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RevokeSecurityGroupIngressInputSet = function() {
    RevokeSecurityGroupIngressInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the GroupId input for this Choreo. ((conditional, string) The ID of the security group to modify. Can be used instead of GroupName.)
        */
        this.set_GroupId = function(value) {
            this.setInput("GroupId", value);
        }

        /*
        Set the value of the GroupName input for this Choreo. ((conditional, string) The name of the security group to modify. Can be used instead of GroupId.)
        */
        this.set_GroupName = function(value) {
            this.setInput("GroupName", value);
        }

        /*
        Set the value of the IpPermissionsCidrIp input for this Choreo. ((optional, string) The CIDR range. Cannot be used when specifying a source security group.)
        */
        this.set_IpPermissionsCidrIp = function(value) {
            this.setInput("IpPermissionsCidrIp", value);
        }

        /*
        Set the value of the IpPermissionsFromPort input for this Choreo. ((optional, integer) The start of port range for the TCP and UDP protocols, or an ICMP type number. For the ICMP type number, you can use -1 to specify all ICMP types.)
        */
        this.set_IpPermissionsFromPort = function(value) {
            this.setInput("IpPermissionsFromPort", value);
        }

        /*
        Set the value of the IpPermissionsGroupId input for this Choreo. ((optional, string) The ID of the source security group. Cannot be used when specifying a CIDR IP address.)
        */
        this.set_IpPermissionsGroupId = function(value) {
            this.setInput("IpPermissionsGroupId", value);
        }

        /*
        Set the value of the IpPermissionsGroupName input for this Choreo. ((optional, string) The name of the source security group. Cannot be used when specifying a CIDR IP address.)
        */
        this.set_IpPermissionsGroupName = function(value) {
            this.setInput("IpPermissionsGroupName", value);
        }

        /*
        Set the value of the IpPermissionsIpProtocol input for this Choreo. ((required, string) The IP protocol name or number. Valid values for EC2-Classic: tcp, udp, icmp (or 6, 17, 1). Valid values for EC2-VPC: tcp, udp, icmp, any valid protocol number (0-254), or -1 (to specify all).)
        */
        this.set_IpPermissionsIpProtocol = function(value) {
            this.setInput("IpPermissionsIpProtocol", value);
        }

        /*
        Set the value of the IpPermissionsToPort input for this Choreo. ((optional, integer) The end of port range for the TCP and UDP protocols, or an ICMP code number. For the ICMP code number, you can use -1 to specify all ICMP codes for the given ICMP type.)
        */
        this.set_IpPermissionsToPort = function(value) {
            this.setInput("IpPermissionsToPort", value);
        }

        /*
        Set the value of the IpPermissionsUserId input for this Choreo. ((optional, string) The AWS account ID that owns the source security group. Cannot be used when specifying a CIDR IP address.)
        */
        this.set_IpPermissionsUserId = function(value) {
            this.setInput("IpPermissionsUserId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RevokeSecurityGroupIngress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RevokeSecurityGroupIngressResultSet = function(resultStream) {
    RevokeSecurityGroupIngressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RevokeSecurityGroupIngress, choreography.Choreography);
util.inherits(RevokeSecurityGroupIngressInputSet, choreography.InputSet);
util.inherits(RevokeSecurityGroupIngressResultSet, choreography.ResultSet);
exports.RevokeSecurityGroupIngress = RevokeSecurityGroupIngress;


/*
    RunInstances
    Launches the specified number of instances of an AMI for which you have permissions.
*/


var RunInstances = function(session) {
    /*
        Create a new instance of the RunInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/RunInstances"
    RunInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RunInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RunInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RunInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RunInstancesInputSet = function() {
    RunInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the DeleteOnTermination input for this Choreo. ((optional, boolean) Sets whether the volume is deleted on instance termination. Defaults to "true". This is a Block Device Mapping parameter.)
        */
        this.set_DeleteOnTermination = function(value) {
            this.setInput("DeleteOnTermination", value);
        }

        /*
        Set the value of the DeviceName input for this Choreo. ((optional, string) The device name exposed to the instance (i.e. /dev/sdh or xvdh). This is a Block Device Mapping parameter.)
        */
        this.set_DeviceName = function(value) {
            this.setInput("DeviceName", value);
        }

        /*
        Set the value of the ImageId input for this Choreo. ((required, string) The ID of the AMI.)
        */
        this.set_ImageId = function(value) {
            this.setInput("ImageId", value);
        }

        /*
        Set the value of the InstanceType input for this Choreo. ((optional, string) The instance type (i.e. t1.micro, m1.small, m1.medium, m1.large, m1.xlarge). Default is m1.small.)
        */
        this.set_InstanceType = function(value) {
            this.setInput("InstanceType", value);
        }

        /*
        Set the value of the Iops input for this Choreo. ((optional, integer) The number of I/O operations per second (IOPS) that the volume supports. Valid range is 100 to 2000. This is a Block Device Mapping parameter.)
        */
        this.set_Iops = function(value) {
            this.setInput("Iops", value);
        }

        /*
        Set the value of the KernelId input for this Choreo. ((optional, string) The ID of the kernel with which to launch the instance.)
        */
        this.set_KernelId = function(value) {
            this.setInput("KernelId", value);
        }

        /*
        Set the value of the KeyName input for this Choreo. ((optional, string) The name of the key pair to use.)
        */
        this.set_KeyName = function(value) {
            this.setInput("KeyName", value);
        }

        /*
        Set the value of the MaxCount input for this Choreo. ((required, integer) The maximum number of instances to launch. If the value is more than Amazon EC2 can launch, the largest possible number above MinCount will be launched instead.)
        */
        this.set_MaxCount = function(value) {
            this.setInput("MaxCount", value);
        }

        /*
        Set the value of the MinCount input for this Choreo. ((required, integer) The minimum number of instances to launch. If the value is more than Amazon EC2 can launch, no instances are launched at all.)
        */
        this.set_MinCount = function(value) {
            this.setInput("MinCount", value);
        }

        /*
        Set the value of the MonitoringEnabled input for this Choreo. ((optional, boolean) Enables monitoring for the instance. Defaults to false.)
        */
        this.set_MonitoringEnabled = function(value) {
            this.setInput("MonitoringEnabled", value);
        }

        /*
        Set the value of the NoDevice input for this Choreo. ((optional, boolean) Suppresses a device mapping. This is a Block Device Mapping parameter.)
        */
        this.set_NoDevice = function(value) {
            this.setInput("NoDevice", value);
        }

        /*
        Set the value of the PlacementAvailabilityZone input for this Choreo. ((optional, string) The Availability Zone to launch the instance into.)
        */
        this.set_PlacementAvailabilityZone = function(value) {
            this.setInput("PlacementAvailabilityZone", value);
        }

        /*
        Set the value of the PlacementGroupName input for this Choreo. ((optional, string) The name of an existing placement group you want to launch the instance into (for cluster instances).)
        */
        this.set_PlacementGroupName = function(value) {
            this.setInput("PlacementGroupName", value);
        }

        /*
        Set the value of the PlacementTenancy input for this Choreo. ((optional, string) The tenancy of the instance. When set to "dedicated", the instance will run on single-tenant hardware and can only be launched into a VPC.)
        */
        this.set_PlacementTenancy = function(value) {
            this.setInput("PlacementTenancy", value);
        }

        /*
        Set the value of the RamdiskId input for this Choreo. ((optional, string) The ID of the RAM disk.)
        */
        this.set_RamdiskId = function(value) {
            this.setInput("RamdiskId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the SecurityGroupId input for this Choreo. ((optional, string) One or more security group IDs. This can be a comma-separated list of up to 10 security group ids.)
        */
        this.set_SecurityGroupId = function(value) {
            this.setInput("SecurityGroupId", value);
        }

        /*
        Set the value of the SecurityGroup input for this Choreo. ((optional, string) One or more security group names. This can be a comma-separated list of up to 10 security group names.)
        */
        this.set_SecurityGroup = function(value) {
            this.setInput("SecurityGroup", value);
        }

        /*
        Set the value of the ShutdownBehavior input for this Choreo. ((optional, string) Whether the instance stops or terminates on instance-initiated shutdown. Valid values are: stop and terminate.)
        */
        this.set_ShutdownBehavior = function(value) {
            this.setInput("ShutdownBehavior", value);
        }

        /*
        Set the value of the SnapshotId input for this Choreo. ((optional, string) The ID of the snapshot. This is a Block Device Mapping parameter.)
        */
        this.set_SnapshotId = function(value) {
            this.setInput("SnapshotId", value);
        }

        /*
        Set the value of the SubnetId input for this Choreo. ((optional, string) The ID of the subnet to launch the instance into (i.e. subnet-dea63cb7).)
        */
        this.set_SubnetId = function(value) {
            this.setInput("SubnetId", value);
        }

        /*
        Set the value of the UserData input for this Choreo. ((optional, string) The Base64-encoded MIME user data to be made available to the instance(s).)
        */
        this.set_UserData = function(value) {
            this.setInput("UserData", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VirtualName input for this Choreo. ((optional, string) The name of the virtual device. This is a Block Device Mapping parameter.)
        */
        this.set_VirtualName = function(value) {
            this.setInput("VirtualName", value);
        }

        /*
        Set the value of the VolumeSize input for this Choreo. ((optional, string) The size of the volume, in GiBs. Required unless you're creating the volume from a snapshot which indicates that the size will be the size of the snapshot. This is a Block Device Mapping parameter.)
        */
        this.set_VolumeSize = function(value) {
            this.setInput("VolumeSize", value);
        }

        /*
        Set the value of the VolumeType input for this Choreo. ((optional, string) The volume type. Valid values are: standard (the default) and io1. This is a Block Device Mapping parameter.)
        */
        this.set_VolumeType = function(value) {
            this.setInput("VolumeType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RunInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RunInstancesResultSet = function(resultStream) {
    RunInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RunInstances, choreography.Choreography);
util.inherits(RunInstancesInputSet, choreography.InputSet);
util.inherits(RunInstancesResultSet, choreography.ResultSet);
exports.RunInstances = RunInstances;


/*
    StartInstances
    Allows you to start an Amazon Machine Image by specifying its Instance ID.
*/


var StartInstances = function(session) {
    /*
        Create a new instance of the StartInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/StartInstances"
    StartInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StartInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StartInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StartInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StartInstancesInputSet = function() {
    StartInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The instance ID to start. This can be a comma-separated list of up to 10 instance IDs.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StartInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StartInstancesResultSet = function(resultStream) {
    StartInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StartInstances, choreography.Choreography);
util.inherits(StartInstancesInputSet, choreography.InputSet);
util.inherits(StartInstancesResultSet, choreography.ResultSet);
exports.StartInstances = StartInstances;


/*
    StopInstances
    Stops an Amazon EBS-backed instance.
*/


var StopInstances = function(session) {
    /*
        Create a new instance of the StopInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/StopInstances"
    StopInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new StopInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new StopInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the StopInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var StopInstancesInputSet = function() {
    StopInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The instance ID to stop. This can be a comma-separated list of up to 10 instance IDs.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the StopInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var StopInstancesResultSet = function(resultStream) {
    StopInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(StopInstances, choreography.Choreography);
util.inherits(StopInstancesInputSet, choreography.InputSet);
util.inherits(StopInstancesResultSet, choreography.ResultSet);
exports.StopInstances = StopInstances;


/*
    TerminateInstances
    Shuts down one or more instances.
*/


var TerminateInstances = function(session) {
    /*
        Create a new instance of the TerminateInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/TerminateInstances"
    TerminateInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new TerminateInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new TerminateInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the TerminateInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var TerminateInstancesInputSet = function() {
    TerminateInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The instance ID to terminate. This can be a comma-separated list of up to 10 instance IDs.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the TerminateInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var TerminateInstancesResultSet = function(resultStream) {
    TerminateInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(TerminateInstances, choreography.Choreography);
util.inherits(TerminateInstancesInputSet, choreography.InputSet);
util.inherits(TerminateInstancesResultSet, choreography.ResultSet);
exports.TerminateInstances = TerminateInstances;


/*
    UnmonitorInstances
    Disable monitoring for a specified instance.
*/


var UnmonitorInstances = function(session) {
    /*
        Create a new instance of the UnmonitorInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/EC2/UnmonitorInstances"
    UnmonitorInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UnmonitorInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UnmonitorInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UnmonitorInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UnmonitorInstancesInputSet = function() {
    UnmonitorInstancesInputSet.super_.call(this);
        /*
        Set the value of the AWSAccessKeyId input for this Choreo. ((required, string) The Access Key ID provided by Amazon Web Services.)
        */
        this.set_AWSAccessKeyId = function(value) {
            this.setInput("AWSAccessKeyId", value);
        }

        /*
        Set the value of the AWSSecretKeyId input for this Choreo. ((required, string) The Secret Key ID provided by Amazon Web Services.)
        */
        this.set_AWSSecretKeyId = function(value) {
            this.setInput("AWSSecretKeyId", value);
        }

        /*
        Set the value of the InstanceId input for this Choreo. ((required, string) The ID(s) of the instance(s) you want to stop monitoring. This can be a comma-separated list of up to 10 instance IDs.)
        */
        this.set_InstanceId = function(value) {
            this.setInput("InstanceId", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the EC2 endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UnmonitorInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UnmonitorInstancesResultSet = function(resultStream) {
    UnmonitorInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(UnmonitorInstances, choreography.Choreography);
util.inherits(UnmonitorInstancesInputSet, choreography.InputSet);
util.inherits(UnmonitorInstancesResultSet, choreography.ResultSet);
exports.UnmonitorInstances = UnmonitorInstances;

