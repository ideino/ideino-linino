
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    AuthorizeDBSecurityGroupIngress
    Allows restricted access to your database instance by adding EC2 Security Groups to the DBSecurityGroup or by specifying an allowed IP range.
*/


var AuthorizeDBSecurityGroupIngress = function(session) {
    /*
        Create a new instance of the AuthorizeDBSecurityGroupIngress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/AuthorizeDBSecurityGroupIngress"
    AuthorizeDBSecurityGroupIngress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AuthorizeDBSecurityGroupIngressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AuthorizeDBSecurityGroupIngressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the AuthorizeDBSecurityGroupIngress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AuthorizeDBSecurityGroupIngressInputSet = function() {
    AuthorizeDBSecurityGroupIngressInputSet.super_.call(this);
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
        Set the value of the CIDRIP input for this Choreo. ((conditional, string) IP range that should have access. Required unless EC2SecurityGroupName and EC2SecurityGroupOwnerId are used.)
        */
        this.set_CIDRIP = function(value) {
            this.setInput("CIDRIP", value);
        }

        /*
        Set the value of the DBSecurityGroupName input for this Choreo. ((required, string) A unique name for the security group you want to authorize.)
        */
        this.set_DBSecurityGroupName = function(value) {
            this.setInput("DBSecurityGroupName", value);
        }

        /*
        Set the value of the EC2SecurityGroupName input for this Choreo. ((conditional, string) The EC2 security group to authorize. This and EC2SecurityGroupOwnerId are required if CIDRIP is not used.)
        */
        this.set_EC2SecurityGroupName = function(value) {
            this.setInput("EC2SecurityGroupName", value);
        }

        /*
        Set the value of the EC2SecurityGroupOwnerId input for this Choreo. ((conditional, string) The AWS account number for the security group owner. This and EC2SecurityGroupName are required if CIDRIP is not used.)
        */
        this.set_EC2SecurityGroupOwnerId = function(value) {
            this.setInput("EC2SecurityGroupOwnerId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the AuthorizeDBSecurityGroupIngress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AuthorizeDBSecurityGroupIngressResultSet = function(resultStream) {
    AuthorizeDBSecurityGroupIngressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(AuthorizeDBSecurityGroupIngress, choreography.Choreography);
util.inherits(AuthorizeDBSecurityGroupIngressInputSet, choreography.InputSet);
util.inherits(AuthorizeDBSecurityGroupIngressResultSet, choreography.ResultSet);
exports.AuthorizeDBSecurityGroupIngress = AuthorizeDBSecurityGroupIngress;


/*
    CreateDBInstance
    Creates a new database instance.
*/


var CreateDBInstance = function(session) {
    /*
        Create a new instance of the CreateDBInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/CreateDBInstance"
    CreateDBInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDBInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDBInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDBInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDBInstanceInputSet = function() {
    CreateDBInstanceInputSet.super_.call(this);
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
        Set the value of the AllocatedStorage input for this Choreo. ((required, integer) Storage amount (in gigabytes) to be configured for the DB. Use 5 to 1024 for MySQL , 10 to 1024 for Oracle, or 200 to 1024 for SQLServer.)
        */
        this.set_AllocatedStorage = function(value) {
            this.setInput("AllocatedStorage", value);
        }

        /*
        Set the value of the AutoMinorVersionUpgrade input for this Choreo. ((optional, boolean) Indicates that minor engine upgrades will be applied to the DB Instance automatically during the maintenance window.)
        */
        this.set_AutoMinorVersionUpgrade = function(value) {
            this.setInput("AutoMinorVersionUpgrade", value);
        }

        /*
        Set the value of the AvailabilityZone input for this Choreo. ((optional, string) The EC2 Availability Zone that the database instance will be created in (e.g. us-east-1a, us-east-1b, us-east-1c).)
        */
        this.set_AvailabilityZone = function(value) {
            this.setInput("AvailabilityZone", value);
        }

        /*
        Set the value of the BackupRetentionPeriod input for this Choreo. ((optional, integer) The number of days for which automated backups are retained. When set to a positive number, backups are enabled. Set to 0 to disable automated backups.)
        */
        this.set_BackupRetentionPeriod = function(value) {
            this.setInput("BackupRetentionPeriod", value);
        }

        /*
        Set the value of the CharacterSetName input for this Choreo. ((optional, string) Indicates that the DB Instance should be associated with the specified CharacterSet.)
        */
        this.set_CharacterSetName = function(value) {
            this.setInput("CharacterSetName", value);
        }

        /*
        Set the value of the DBInstanceClass input for this Choreo. ((required, string) Capacity for the DB instance.  (db.t1.micro, db.m1.small, db.m1.large, db.m1.xlarge, db.m2.xlarge, db.m2.2xlarge, or db.m2.4xlarge).)
        */
        this.set_DBInstanceClass = function(value) {
            this.setInput("DBInstanceClass", value);
        }

        /*
        Set the value of the DBInstanceIdentifier input for this Choreo. ((required, string) The DB Instance identifier. Should be in all lowercase.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the DBName input for this Choreo. ((conditional, string) For MySQL, this is the name of the db that is created on the instance. For Oracle, it refers to the SID. Must be null for SQLServer.)
        */
        this.set_DBName = function(value) {
            this.setInput("DBName", value);
        }

        /*
        Set the value of the DBParameterGroupName input for this Choreo. ((optional, string) The name of the DB Parameter Group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine will be used.)
        */
        this.set_DBParameterGroupName = function(value) {
            this.setInput("DBParameterGroupName", value);
        }

        /*
        Set the value of the DBSecurityGroups input for this Choreo. ((optional, string) A comma separated list of up to 10 DB Security Groups to associate with this DB Instance.)
        */
        this.set_DBSecurityGroups = function(value) {
            this.setInput("DBSecurityGroups", value);
        }

        /*
        Set the value of the DBSubnetGroupName input for this Choreo. ((optional, string) A DB Subnet Group to associate with this DB Instance. When not specified, it indicates that this is a non-VPC DB instance.)
        */
        this.set_DBSubnetGroupName = function(value) {
            this.setInput("DBSubnetGroupName", value);
        }

        /*
        Set the value of the EngineVersion input for this Choreo. ((optional, string) The version number of the database engine to use.)
        */
        this.set_EngineVersion = function(value) {
            this.setInput("EngineVersion", value);
        }

        /*
        Set the value of the Engine input for this Choreo. ((required, string) The name of the database engine to use for the instance. Options are: MySQL, oracle-se1, oracle-se, oracle-ee, sqlserver-ee, sqlserver-se, sqlserver-ex, sqlserver-web.)
        */
        this.set_Engine = function(value) {
            this.setInput("Engine", value);
        }

        /*
        Set the value of the Iops input for this Choreo. ((optional, string) The amount of provisioned input/output operations per second to be initially allocated for the DB Instance.)
        */
        this.set_Iops = function(value) {
            this.setInput("Iops", value);
        }

        /*
        Set the value of the LicenseModel input for this Choreo. ((optional, string) License model information for this DB Instance. Valid values are: license-included, bring-your-own-license, general-public-license.)
        */
        this.set_LicenseModel = function(value) {
            this.setInput("LicenseModel", value);
        }

        /*
        Set the value of the MasterUserPassword input for this Choreo. ((required, password) The master password for the DB instance.)
        */
        this.set_MasterUserPassword = function(value) {
            this.setInput("MasterUserPassword", value);
        }

        /*
        Set the value of the MasterUsername input for this Choreo. ((required, string) The master username for the DB instance.)
        */
        this.set_MasterUsername = function(value) {
            this.setInput("MasterUsername", value);
        }

        /*
        Set the value of the MultiAZ input for this Choreo. ((optional, boolean) Specifies if the DB Instance is a Multi-AZ deployment. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.)
        */
        this.set_MultiAZ = function(value) {
            this.setInput("MultiAZ", value);
        }

        /*
        Set the value of the OptionGroupName input for this Choreo. ((optional, string) Indicates that the DB Instance should be associated with the specified option group.)
        */
        this.set_OptionGroupName = function(value) {
            this.setInput("OptionGroupName", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((optional, integer) The port number on which the database accepts connections. Valid range for MySQL is 1150-65535. Valid range for Oracle is 1150-65535. Valid range for SQLServer is 1150-65535 except for 1434 and 3389.)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the PreferredBackupWindow input for this Choreo. ((optional, string) The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. Must be in the format hh24:mi-hh24:mi (in UTC).)
        */
        this.set_PreferredBackupWindow = function(value) {
            this.setInput("PreferredBackupWindow", value);
        }

        /*
        Set the value of the PreferredMaintenanceWindow input for this Choreo. ((optional, string) The weekly time range (in UTC) during which system maintenance can occur. Format: ddd:hh24:mi-ddd:hh24:mi.)
        */
        this.set_PreferredMaintenanceWindow = function(value) {
            this.setInput("PreferredMaintenanceWindow", value);
        }

        /*
        Set the value of the PubliclyAccessible input for this Choreo. ((optional, boolean) Specifies the accessibility options for the DB Instance. The default behavior varies depending on whether a VPC has been requested or not.)
        */
        this.set_PubliclyAccessible = function(value) {
            this.setInput("PubliclyAccessible", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

        /*
        Set the value of the VpcSecurityGroupIds input for this Choreo. ((optional, string) A comma separated list of up to 10 EC2 VPC Security Groups to associate with this DB Instance.)
        */
        this.set_VpcSecurityGroupIds = function(value) {
            this.setInput("VpcSecurityGroupIds", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDBInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDBInstanceResultSet = function(resultStream) {
    CreateDBInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDBInstance, choreography.Choreography);
util.inherits(CreateDBInstanceInputSet, choreography.InputSet);
util.inherits(CreateDBInstanceResultSet, choreography.ResultSet);
exports.CreateDBInstance = CreateDBInstance;


/*
    CreateDBSecurityGroup
    Creates a new database security group which you can use to control the access to the database instance.
*/


var CreateDBSecurityGroup = function(session) {
    /*
        Create a new instance of the CreateDBSecurityGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/CreateDBSecurityGroup"
    CreateDBSecurityGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDBSecurityGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDBSecurityGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDBSecurityGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDBSecurityGroupInputSet = function() {
    CreateDBSecurityGroupInputSet.super_.call(this);
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
        Set the value of the DBSecurityGroupDescription input for this Choreo. ((required, string) A description for the security group you're creating.)
        */
        this.set_DBSecurityGroupDescription = function(value) {
            this.setInput("DBSecurityGroupDescription", value);
        }

        /*
        Set the value of the DBSecurityGroupName input for this Choreo. ((required, string) A unique name for the security group you want to create.)
        */
        this.set_DBSecurityGroupName = function(value) {
            this.setInput("DBSecurityGroupName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDBSecurityGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDBSecurityGroupResultSet = function(resultStream) {
    CreateDBSecurityGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDBSecurityGroup, choreography.Choreography);
util.inherits(CreateDBSecurityGroupInputSet, choreography.InputSet);
util.inherits(CreateDBSecurityGroupResultSet, choreography.ResultSet);
exports.CreateDBSecurityGroup = CreateDBSecurityGroup;


/*
    CreateDBSnapshot
    Creates a snapshot of an existing database instance.
*/


var CreateDBSnapshot = function(session) {
    /*
        Create a new instance of the CreateDBSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/CreateDBSnapshot"
    CreateDBSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateDBSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateDBSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateDBSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateDBSnapshotInputSet = function() {
    CreateDBSnapshotInputSet.super_.call(this);
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
        Set the value of the DBInstanceIdentifier input for this Choreo. ((required, string) The DB Instance identifier. Should be in all lowercase.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the DBSnapshotIdentifier input for this Choreo. ((required, string) The unique identifier for the db snapshot you're creating.)
        */
        this.set_DBSnapshotIdentifier = function(value) {
            this.setInput("DBSnapshotIdentifier", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateDBSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateDBSnapshotResultSet = function(resultStream) {
    CreateDBSnapshotResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CreateDBSnapshot, choreography.Choreography);
util.inherits(CreateDBSnapshotInputSet, choreography.InputSet);
util.inherits(CreateDBSnapshotResultSet, choreography.ResultSet);
exports.CreateDBSnapshot = CreateDBSnapshot;


/*
    DeleteDBInstance
    Deletes a specified database instance.
*/


var DeleteDBInstance = function(session) {
    /*
        Create a new instance of the DeleteDBInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DeleteDBInstance"
    DeleteDBInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDBInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDBInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDBInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDBInstanceInputSet = function() {
    DeleteDBInstanceInputSet.super_.call(this);
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
        Set the value of the DBInstanceIdentifier input for this Choreo. ((required, string) The ID for the DB instance to delete.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDBInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDBInstanceResultSet = function(resultStream) {
    DeleteDBInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteDBInstance, choreography.Choreography);
util.inherits(DeleteDBInstanceInputSet, choreography.InputSet);
util.inherits(DeleteDBInstanceResultSet, choreography.ResultSet);
exports.DeleteDBInstance = DeleteDBInstance;


/*
    DeleteDBSecurityGroup
    Deletes a specified database security group.
*/


var DeleteDBSecurityGroup = function(session) {
    /*
        Create a new instance of the DeleteDBSecurityGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DeleteDBSecurityGroup"
    DeleteDBSecurityGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDBSecurityGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDBSecurityGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDBSecurityGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDBSecurityGroupInputSet = function() {
    DeleteDBSecurityGroupInputSet.super_.call(this);
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
        Set the value of the DBSecurityGroupName input for this Choreo. ((required, string) The name for the security group you want to delete.)
        */
        this.set_DBSecurityGroupName = function(value) {
            this.setInput("DBSecurityGroupName", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDBSecurityGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDBSecurityGroupResultSet = function(resultStream) {
    DeleteDBSecurityGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteDBSecurityGroup, choreography.Choreography);
util.inherits(DeleteDBSecurityGroupInputSet, choreography.InputSet);
util.inherits(DeleteDBSecurityGroupResultSet, choreography.ResultSet);
exports.DeleteDBSecurityGroup = DeleteDBSecurityGroup;


/*
    DeleteDBSnapshot
    Deletes a specified database snapshot.
*/


var DeleteDBSnapshot = function(session) {
    /*
        Create a new instance of the DeleteDBSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DeleteDBSnapshot"
    DeleteDBSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteDBSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteDBSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteDBSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteDBSnapshotInputSet = function() {
    DeleteDBSnapshotInputSet.super_.call(this);
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
        Set the value of the DBSnapshotIdentifier input for this Choreo. ((required, string) A unique identifier for the snapshot you want to delete.)
        */
        this.set_DBSnapshotIdentifier = function(value) {
            this.setInput("DBSnapshotIdentifier", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteDBSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteDBSnapshotResultSet = function(resultStream) {
    DeleteDBSnapshotResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteDBSnapshot, choreography.Choreography);
util.inherits(DeleteDBSnapshotInputSet, choreography.InputSet);
util.inherits(DeleteDBSnapshotResultSet, choreography.ResultSet);
exports.DeleteDBSnapshot = DeleteDBSnapshot;


/*
    DescribeDBInstances
    Returns information about privisioned database instances.
*/


var DescribeDBInstances = function(session) {
    /*
        Create a new instance of the DescribeDBInstances Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DescribeDBInstances"
    DescribeDBInstances.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeDBInstancesResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeDBInstancesInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeDBInstances
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeDBInstancesInputSet = function() {
    DescribeDBInstancesInputSet.super_.call(this);
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
        Set the value of the DBInstanceIdentifier input for this Choreo. ((optional, string) The DB Instance identifier. Should be in all lowercase.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, integer) If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) The max number of results to return in the response. Defaults to 100. Minimum is 20.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeDBInstances Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeDBInstancesResultSet = function(resultStream) {
    DescribeDBInstancesResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeDBInstances, choreography.Choreography);
util.inherits(DescribeDBInstancesInputSet, choreography.InputSet);
util.inherits(DescribeDBInstancesResultSet, choreography.ResultSet);
exports.DescribeDBInstances = DescribeDBInstances;


/*
    DescribeDBSecurityGroup
    Returns a list of DBSecurityGroup descriptions. The list will can be filtered by specifying a DBSecurityGroupName.
*/


var DescribeDBSecurityGroup = function(session) {
    /*
        Create a new instance of the DescribeDBSecurityGroup Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DescribeDBSecurityGroup"
    DescribeDBSecurityGroup.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeDBSecurityGroupResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeDBSecurityGroupInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeDBSecurityGroup
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeDBSecurityGroupInputSet = function() {
    DescribeDBSecurityGroupInputSet.super_.call(this);
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
        Set the value of the DBSecurityGroupName input for this Choreo. ((optional, string) The name for the security group you want to retrieve information for.)
        */
        this.set_DBSecurityGroupName = function(value) {
            this.setInput("DBSecurityGroupName", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, integer) If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) The max number of results to return in the response. Defaults to 100. Minimum is 20.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeDBSecurityGroup Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeDBSecurityGroupResultSet = function(resultStream) {
    DescribeDBSecurityGroupResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeDBSecurityGroup, choreography.Choreography);
util.inherits(DescribeDBSecurityGroupInputSet, choreography.InputSet);
util.inherits(DescribeDBSecurityGroupResultSet, choreography.ResultSet);
exports.DescribeDBSecurityGroup = DescribeDBSecurityGroup;


/*
    DescribeDBSnapshot
    Returns information about DB Snapshots.
*/


var DescribeDBSnapshot = function(session) {
    /*
        Create a new instance of the DescribeDBSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DescribeDBSnapshot"
    DescribeDBSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeDBSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeDBSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeDBSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeDBSnapshotInputSet = function() {
    DescribeDBSnapshotInputSet.super_.call(this);
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
        Set the value of the DBInstanceIdentifier input for this Choreo. ((optional, string) The DB Instance identifier. Should be in all lowercase.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the DBSnapshotIdentifier input for this Choreo. ((optional, string) The unique identifier for the db snapshot you're retrieving information for.)
        */
        this.set_DBSnapshotIdentifier = function(value) {
            this.setInput("DBSnapshotIdentifier", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) The max number of results to return in the response. Defaults to 100. Minimum is 20.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeDBSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeDBSnapshotResultSet = function(resultStream) {
    DescribeDBSnapshotResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeDBSnapshot, choreography.Choreography);
util.inherits(DescribeDBSnapshotInputSet, choreography.InputSet);
util.inherits(DescribeDBSnapshotResultSet, choreography.ResultSet);
exports.DescribeDBSnapshot = DescribeDBSnapshot;


/*
    DescribeEvents
    Returns events related to DB Instances, DB Security Groups, DB Snapshots and DB Parameter Groups for the past 14 days.
*/


var DescribeEvents = function(session) {
    /*
        Create a new instance of the DescribeEvents Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/DescribeEvents"
    DescribeEvents.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DescribeEventsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DescribeEventsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DescribeEvents
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DescribeEventsInputSet = function() {
    DescribeEventsInputSet.super_.call(this);
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
        Set the value of the Duration input for this Choreo. ((optional, integer) The number of minutes to retrieve events for. Defaults to 60.)
        */
        this.set_Duration = function(value) {
            this.setInput("Duration", value);
        }

        /*
        Set the value of the EndTime input for this Choreo. ((optional, date) The end of the time interval for which to retrieve events, specified in ISO 8601 format (i.e. 2009-07-08T18:00Z).)
        */
        this.set_EndTime = function(value) {
            this.setInput("EndTime", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, integer) If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) The maximum number of records to include in the response. If more records exist, a marker is included in the response so that the remaining results may be retrieved. Defaults to max (100). Min is 20.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the SourceIdentifier input for this Choreo. ((optional, string) The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.)
        */
        this.set_SourceIdentifier = function(value) {
            this.setInput("SourceIdentifier", value);
        }

        /*
        Set the value of the SourceType input for this Choreo. ((optional, string) The event source to retrieve events for. If no value is specified, all events are returned. Valid values are: db-instance | db-parameter-group | db-security-group | db-snapshot.)
        */
        this.set_SourceType = function(value) {
            this.setInput("SourceType", value);
        }

        /*
        Set the value of the StartTime input for this Choreo. ((optional, date) The beginning of the time interval to retrieve events for, specified in ISO 8601 format (i.e. 2009-07-08T18:00Z))
        */
        this.set_StartTime = function(value) {
            this.setInput("StartTime", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DescribeEvents Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DescribeEventsResultSet = function(resultStream) {
    DescribeEventsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DescribeEvents, choreography.Choreography);
util.inherits(DescribeEventsInputSet, choreography.InputSet);
util.inherits(DescribeEventsResultSet, choreography.ResultSet);
exports.DescribeEvents = DescribeEvents;


/*
    ModifyDBInstance
    Modify settings for a DB Instance. You can change one or more database configuration parameters by specifying values for the Choreo inputs.
*/


var ModifyDBInstance = function(session) {
    /*
        Create a new instance of the ModifyDBInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/ModifyDBInstance"
    ModifyDBInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ModifyDBInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ModifyDBInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ModifyDBInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ModifyDBInstanceInputSet = function() {
    ModifyDBInstanceInputSet.super_.call(this);
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
        Set the value of the AllocatedStorage input for this Choreo. ((required, integer) Storage amount (in gigabytes) to be configured for the DB. Use 5 to 1024 for MySQL or 10 to 1024 for Oracle. Value supplied must be at least 10% greater than the current value)
        */
        this.set_AllocatedStorage = function(value) {
            this.setInput("AllocatedStorage", value);
        }

        /*
        Set the value of the AllowMajorVersionUpgrade input for this Choreo. ((optional, boolean) Indicates that major version upgrades are allowed. Defaults to 0 (false).)
        */
        this.set_AllowMajorVersionUpgrade = function(value) {
            this.setInput("AllowMajorVersionUpgrade", value);
        }

        /*
        Set the value of the ApplyImmediately input for this Choreo. ((optional, boolean) Specifies whether or not the modifications applied as soon as possible, regardless of the PreferredMaintenanceWindow setting for the DB Instance. Defaults to 0 (false).)
        */
        this.set_ApplyImmediately = function(value) {
            this.setInput("ApplyImmediately", value);
        }

        /*
        Set the value of the AutoMinorVersionUpgrade input for this Choreo. ((optional, boolean) Indicates that minor version upgrades will be applied automatically to the DB Instance during the maintenance window. Defaults to 0 (false).)
        */
        this.set_AutoMinorVersionUpgrade = function(value) {
            this.setInput("AutoMinorVersionUpgrade", value);
        }

        /*
        Set the value of the BackupRetentionPeriod input for this Choreo. ((optional, integer) Number of days to retain automated backups. Setting to a positive number enables backups. Setting to 0 disables automated backups. Must be a value from 0 to 8. Defaults to 0 (disabled).)
        */
        this.set_BackupRetentionPeriod = function(value) {
            this.setInput("BackupRetentionPeriod", value);
        }

        /*
        Set the value of the DBInstanceClass input for this Choreo. ((required, string) Capacity for the DB instance.  (db.m1.small, db.m1.large, db.m1.xlarge, db.m2.xlarge, db.m2.2xlarge, or db.m2.4xlarge).)
        */
        this.set_DBInstanceClass = function(value) {
            this.setInput("DBInstanceClass", value);
        }

        /*
        Set the value of the DBInstanceIdentifier input for this Choreo. ((required, string) The DB Instance identifier. Should be in all lowercase.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the DBParameterGroupName input for this Choreo. ((optional, string) The name of the DB Parameter Group to apply to this DB Instance.)
        */
        this.set_DBParameterGroupName = function(value) {
            this.setInput("DBParameterGroupName", value);
        }

        /*
        Set the value of the DBSecurityGroup input for this Choreo. ((optional, string) A DB Security Groups to authorize on this DB Instance.)
        */
        this.set_DBSecurityGroup = function(value) {
            this.setInput("DBSecurityGroup", value);
        }

        /*
        Set the value of the EngineVersion input for this Choreo. ((optional, string) The version number of the database engine to upgrade to.)
        */
        this.set_EngineVersion = function(value) {
            this.setInput("EngineVersion", value);
        }

        /*
        Set the value of the MasterUserPassword input for this Choreo. ((required, string) The new password for the DB Instance master user.)
        */
        this.set_MasterUserPassword = function(value) {
            this.setInput("MasterUserPassword", value);
        }

        /*
        Set the value of the MultiAZ input for this Choreo. ((optional, boolean) Specifies if the DB Instance is a Multi-AZ deployment.)
        */
        this.set_MultiAZ = function(value) {
            this.setInput("MultiAZ", value);
        }

        /*
        Set the value of the PreferredBackupWindow input for this Choreo. ((optional, string) The daily time range during which automated backups are created. Format: hh24:mi-hh24:mi (in UTC). Must be at least 30 minutes. Can not conflict with PreferredMaintenanceWindow setting.)
        */
        this.set_PreferredBackupWindow = function(value) {
            this.setInput("PreferredBackupWindow", value);
        }

        /*
        Set the value of the PreferredMaintenanceWindow input for this Choreo. ((optional, string) The weekly time range (in UTC) during which system maintenance can occur, which may result in an outage. Format: ddd:hh24:mi-ddd:hh24:mi. Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun.)
        */
        this.set_PreferredMaintenanceWindow = function(value) {
            this.setInput("PreferredMaintenanceWindow", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ModifyDBInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ModifyDBInstanceResultSet = function(resultStream) {
    ModifyDBInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ModifyDBInstance, choreography.Choreography);
util.inherits(ModifyDBInstanceInputSet, choreography.InputSet);
util.inherits(ModifyDBInstanceResultSet, choreography.ResultSet);
exports.ModifyDBInstance = ModifyDBInstance;


/*
    RebootDBInstance
    Reboots a specified database instance.
*/


var RebootDBInstance = function(session) {
    /*
        Create a new instance of the RebootDBInstance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/RebootDBInstance"
    RebootDBInstance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RebootDBInstanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RebootDBInstanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RebootDBInstance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RebootDBInstanceInputSet = function() {
    RebootDBInstanceInputSet.super_.call(this);
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
        Set the value of the DBInstanceIdentifier input for this Choreo. ((required, string) The ID for the DB instance to reboot.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RebootDBInstance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RebootDBInstanceResultSet = function(resultStream) {
    RebootDBInstanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RebootDBInstance, choreography.Choreography);
util.inherits(RebootDBInstanceInputSet, choreography.InputSet);
util.inherits(RebootDBInstanceResultSet, choreography.ResultSet);
exports.RebootDBInstance = RebootDBInstance;


/*
    RestoreDBInstanceFromDBSnapshot
    Creates a new DB Instance from a DB snapshot.
*/


var RestoreDBInstanceFromDBSnapshot = function(session) {
    /*
        Create a new instance of the RestoreDBInstanceFromDBSnapshot Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/RestoreDBInstanceFromDBSnapshot"
    RestoreDBInstanceFromDBSnapshot.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RestoreDBInstanceFromDBSnapshotResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RestoreDBInstanceFromDBSnapshotInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RestoreDBInstanceFromDBSnapshot
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RestoreDBInstanceFromDBSnapshotInputSet = function() {
    RestoreDBInstanceFromDBSnapshotInputSet.super_.call(this);
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
        Set the value of the AutoMinorVersionUpgrade input for this Choreo. ((optional, boolean) Indicates that minor version upgrades will be applied automatically to the DB Instance during the maintenance window. Defaults to 0 (false).)
        */
        this.set_AutoMinorVersionUpgrade = function(value) {
            this.setInput("AutoMinorVersionUpgrade", value);
        }

        /*
        Set the value of the AvailabilityZone input for this Choreo. ((optional, string) The EC2 Availability Zone that the database instance will be created in. A random one is chose if not provided. Can not be specified if the MultiAZ parameter is set to 1 (true).)
        */
        this.set_AvailabilityZone = function(value) {
            this.setInput("AvailabilityZone", value);
        }

        /*
        Set the value of the DBInstanceClass input for this Choreo. ((optional, string) The compute and memory capacity of the Amazon RDS DB instance. Valid Values: db.m1.small | db.m1.large | db.m1.xlarge | db.m2.2xlarge | db.m2.4xlarge.)
        */
        this.set_DBInstanceClass = function(value) {
            this.setInput("DBInstanceClass", value);
        }

        /*
        Set the value of the DBInstanceIdentifier input for this Choreo. ((required, string) The identifier for the new DB instance that will be created from the specified Snapshot.)
        */
        this.set_DBInstanceIdentifier = function(value) {
            this.setInput("DBInstanceIdentifier", value);
        }

        /*
        Set the value of the DBName input for this Choreo. ((optional, string) The database name for the restored DB Instance. Note that this parameter doesn't apply to the MySQL engine.)
        */
        this.set_DBName = function(value) {
            this.setInput("DBName", value);
        }

        /*
        Set the value of the DBSnapshotIdentifier input for this Choreo. ((required, string) The name of the DB Snapshot to use.)
        */
        this.set_DBSnapshotIdentifier = function(value) {
            this.setInput("DBSnapshotIdentifier", value);
        }

        /*
        Set the value of the Engine input for this Choreo. ((optional, string) The database engine to use for the new instance. Valid Values: MySQL | oracle-se1 | oracle-se | oracle-ee.)
        */
        this.set_Engine = function(value) {
            this.setInput("Engine", value);
        }

        /*
        Set the value of the LicenseModel input for this Choreo. ((optional, string) License model information for the restored DB Instance. Valid values: license-included | bring-your-own-license | general-public-license.)
        */
        this.set_LicenseModel = function(value) {
            this.setInput("LicenseModel", value);
        }

        /*
        Set the value of the MultiAZ input for this Choreo. ((optional, boolean) Specifies if the DB Instance is a Multi-AZ deployment. Do not specify the AvailabilityZone parameter if the MultiAZ parameter is set to 1 (true).)
        */
        this.set_MultiAZ = function(value) {
            this.setInput("MultiAZ", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((optional, integer) The port number on which the database accepts connections.)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RestoreDBInstanceFromDBSnapshot Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RestoreDBInstanceFromDBSnapshotResultSet = function(resultStream) {
    RestoreDBInstanceFromDBSnapshotResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RestoreDBInstanceFromDBSnapshot, choreography.Choreography);
util.inherits(RestoreDBInstanceFromDBSnapshotInputSet, choreography.InputSet);
util.inherits(RestoreDBInstanceFromDBSnapshotResultSet, choreography.ResultSet);
exports.RestoreDBInstanceFromDBSnapshot = RestoreDBInstanceFromDBSnapshot;


/*
    RestoreDBInstanceToPointInTime
    Restores a DB Instance to an specified point-in-time.
*/


var RestoreDBInstanceToPointInTime = function(session) {
    /*
        Create a new instance of the RestoreDBInstanceToPointInTime Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/RestoreDBInstanceToPointInTime"
    RestoreDBInstanceToPointInTime.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RestoreDBInstanceToPointInTimeResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RestoreDBInstanceToPointInTimeInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RestoreDBInstanceToPointInTime
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RestoreDBInstanceToPointInTimeInputSet = function() {
    RestoreDBInstanceToPointInTimeInputSet.super_.call(this);
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
        Set the value of the AutoMinorVersionUpgrade input for this Choreo. ((optional, boolean) Indicates that minor version upgrades will be applied automatically to the DB Instance during the maintenance window. Defaults to 0 (false).)
        */
        this.set_AutoMinorVersionUpgrade = function(value) {
            this.setInput("AutoMinorVersionUpgrade", value);
        }

        /*
        Set the value of the AvailabilityZone input for this Choreo. ((optional, string) The EC2 Availability Zone that the database instance will be created in. A random one is chose if not provided. Can not be specified if the MultiAZ parameter is set to 1 (true).)
        */
        this.set_AvailabilityZone = function(value) {
            this.setInput("AvailabilityZone", value);
        }

        /*
        Set the value of the DBInstanceClass input for this Choreo. ((optional, string) The compute and memory capacity of the Amazon RDS DB instance. Valid Values: db.m1.small | db.m1.large | db.m1.xlarge | db.m2.2xlarge | db.m2.4xlarge.)
        */
        this.set_DBInstanceClass = function(value) {
            this.setInput("DBInstanceClass", value);
        }

        /*
        Set the value of the DBName input for this Choreo. ((optional, string) The database name for the restored DB Instance. Note that this parameter doesn't apply to the MySQL engine.)
        */
        this.set_DBName = function(value) {
            this.setInput("DBName", value);
        }

        /*
        Set the value of the Engine input for this Choreo. ((optional, string) The database engine to use for the new instance. Valid Values: MySQL | oracle-se1 | oracle-se | oracle-ee.)
        */
        this.set_Engine = function(value) {
            this.setInput("Engine", value);
        }

        /*
        Set the value of the LicenseModel input for this Choreo. ((optional, string) License model information for the restored DB Instance. Valid values: license-included | bring-your-own-license | general-public-license.)
        */
        this.set_LicenseModel = function(value) {
            this.setInput("LicenseModel", value);
        }

        /*
        Set the value of the MultiAZ input for this Choreo. ((optional, boolean) Specifies if the DB Instance is a Multi-AZ deployment. Do not specify the AvailabilityZone parameter if the MultiAZ parameter is set to 1 (true).)
        */
        this.set_MultiAZ = function(value) {
            this.setInput("MultiAZ", value);
        }

        /*
        Set the value of the Port input for this Choreo. ((optional, integer) The port number on which the database accepts connections.)
        */
        this.set_Port = function(value) {
            this.setInput("Port", value);
        }

        /*
        Set the value of the RestoreTime input for this Choreo. ((optional, date) The date and time to restore from in UTC. Cannot be specified if UseLatestRestorableTime parameter is set to 1. (format: 2009-09-07T23:45:00Z).)
        */
        this.set_RestoreTime = function(value) {
            this.setInput("RestoreTime", value);
        }

        /*
        Set the value of the SourceDBInstanceIdentifier input for this Choreo. ((required, string) The identifier of the source DB Instance from which to restore.)
        */
        this.set_SourceDBInstanceIdentifier = function(value) {
            this.setInput("SourceDBInstanceIdentifier", value);
        }

        /*
        Set the value of the TargetDBInstanceIdentifier input for this Choreo. ((required, string) The name of the new database instance to be created.)
        */
        this.set_TargetDBInstanceIdentifier = function(value) {
            this.setInput("TargetDBInstanceIdentifier", value);
        }

        /*
        Set the value of the UseLatestRestorableTime input for this Choreo. ((optional, boolean) Specifies whether or not the DB Instance is restored from the latest backup time. Defaults to 0 (false).)
        */
        this.set_UseLatestRestorableTime = function(value) {
            this.setInput("UseLatestRestorableTime", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RestoreDBInstanceToPointInTime Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RestoreDBInstanceToPointInTimeResultSet = function(resultStream) {
    RestoreDBInstanceToPointInTimeResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RestoreDBInstanceToPointInTime, choreography.Choreography);
util.inherits(RestoreDBInstanceToPointInTimeInputSet, choreography.InputSet);
util.inherits(RestoreDBInstanceToPointInTimeResultSet, choreography.ResultSet);
exports.RestoreDBInstanceToPointInTime = RestoreDBInstanceToPointInTime;


/*
    RevokeDBSecurityGroupIngress
    Revokes access from a DBSecurityGroup for previously authorized IP ranges or EC2 Security Groups.
*/


var RevokeDBSecurityGroupIngress = function(session) {
    /*
        Create a new instance of the RevokeDBSecurityGroupIngress Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/RDS/RevokeDBSecurityGroupIngress"
    RevokeDBSecurityGroupIngress.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RevokeDBSecurityGroupIngressResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RevokeDBSecurityGroupIngressInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the RevokeDBSecurityGroupIngress
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RevokeDBSecurityGroupIngressInputSet = function() {
    RevokeDBSecurityGroupIngressInputSet.super_.call(this);
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
        Set the value of the CIDRIP input for this Choreo. ((conditional, string) IP range that should be revoked. Required unless EC2SecurityGroupName and EC2SecurityGroupOwnerId are used.)
        */
        this.set_CIDRIP = function(value) {
            this.setInput("CIDRIP", value);
        }

        /*
        Set the value of the DBSecurityGroupName input for this Choreo. ((required, string) A unique name for the security group you want to revoke ingress from.)
        */
        this.set_DBSecurityGroupName = function(value) {
            this.setInput("DBSecurityGroupName", value);
        }

        /*
        Set the value of the EC2SecurityGroupName input for this Choreo. ((conditional, string) The EC2 security group to revoke. This and EC2SecurityGroupOwnerId are required if CIDRIP is not used.)
        */
        this.set_EC2SecurityGroupName = function(value) {
            this.setInput("EC2SecurityGroupName", value);
        }

        /*
        Set the value of the EC2SecurityGroupOwnerId input for this Choreo. ((conditional, string) The account number for the security group owner to revoke. This and EC2SecurityGroupName are required if CIDRIP is not used.)
        */
        this.set_EC2SecurityGroupOwnerId = function(value) {
            this.setInput("EC2SecurityGroupOwnerId", value);
        }

        /*
        Set the value of the UserRegion input for this Choreo. ((optional, string) The AWS region that corresponds to the RDS endpoint you wish to access. The default region is "us-east-1". See description below for valid values.)
        */
        this.set_UserRegion = function(value) {
            this.setInput("UserRegion", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the RevokeDBSecurityGroupIngress Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RevokeDBSecurityGroupIngressResultSet = function(resultStream) {
    RevokeDBSecurityGroupIngressResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(RevokeDBSecurityGroupIngress, choreography.Choreography);
util.inherits(RevokeDBSecurityGroupIngressInputSet, choreography.InputSet);
util.inherits(RevokeDBSecurityGroupIngressResultSet, choreography.ResultSet);
exports.RevokeDBSecurityGroupIngress = RevokeDBSecurityGroupIngress;

