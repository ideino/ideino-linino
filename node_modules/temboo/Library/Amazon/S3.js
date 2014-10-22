
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CopyObject
    Makes a copy of an existing object in S3 Storage.
*/


var CopyObject = function(session) {
    /*
        Create a new instance of the CopyObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/CopyObject"
    CopyObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CopyObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CopyObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CopyObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CopyObjectInputSet = function() {
    CopyObjectInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that will be the file destination.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((optional, string) By default all objects are private (only owner has full access control). Valid values: private, public-read, public-read-write, authenticated-read, bucket-owner-read, bucket-owner-full-control.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((optional, string) ContentType. Default is application/octet-stream.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the FileToCopy input for this Choreo. ((required, string) The name of the file to copy.)
        */
        this.set_FileToCopy = function(value) {
            this.setInput("FileToCopy", value);
        }

        /*
        Set the value of the IfMatch input for this Choreo. ((optional, string) Copies the object if its entity tag (ETag) matches the specified tag; otherwise returns a 412 HTTP status code error (failed precondition).)
        */
        this.set_IfMatch = function(value) {
            this.setInput("IfMatch", value);
        }

        /*
        Set the value of the IfModifiedSince input for this Choreo. ((optional, date) Copies if it has been modified since the specified time; otherwise returns a 412 HTTP status code error (failed precondition). Must be valid HTTP date. Can be used with IfMatch only.)
        */
        this.set_IfModifiedSince = function(value) {
            this.setInput("IfModifiedSince", value);
        }

        /*
        Set the value of the IfNoneMatch input for this Choreo. ((optional, string) Copies the object if its entity tag (ETag) is different from the specified tag; otherwise returns a 412 HTTP status code error (failed precondition).)
        */
        this.set_IfNoneMatch = function(value) {
            this.setInput("IfNoneMatch", value);
        }

        /*
        Set the value of the IfUnmodifiedSince input for this Choreo. ((optional, date) Copies if it hasn't been modified since the specified time; otherwise returns a 412 HTTP status code error (failed precondition). Must be valid HTTP date. Can be used with IfMatch or IfNoneMatch only.)
        */
        this.set_IfUnmodifiedSince = function(value) {
            this.setInput("IfUnmodifiedSince", value);
        }

        /*
        Set the value of the NewFileName input for this Choreo. ((required, string) The file name for the new copy.)
        */
        this.set_NewFileName = function(value) {
            this.setInput("NewFileName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

        /*
        Set the value of the ServerSideEncryption input for this Choreo. ((optional, string) Specifies the server-side encryption algorithm to use when Amazon S3 creates the target object. Valid value: AES256.)
        */
        this.set_ServerSideEncryption = function(value) {
            this.setInput("ServerSideEncryption", value);
        }

        /*
        Set the value of the StorageClass input for this Choreo. ((optional, string) Enables RRS customers to store their noncritical, reproducible data at lower levels of redundancy than Amazon S3's standard storage. Valid Values: STANDARD (default), REDUCED_REDUNDANCY.)
        */
        this.set_StorageClass = function(value) {
            this.setInput("StorageClass", value);
        }

        /*
        Set the value of the WebsiteRedirectLocation input for this Choreo. ((optional, string) If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Ex: /anotherPage.html, http://www.page.com. Length limit: 2 K.)
        */
        this.set_WebsiteRedirectLocation = function(value) {
            this.setInput("WebsiteRedirectLocation", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload to an Amazon S3 bucket. Required unless using the FileContents input variable.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the CopyObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CopyObjectResultSet = function(resultStream) {
    CopyObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(CopyObject, choreography.Choreography);
util.inherits(CopyObjectInputSet, choreography.InputSet);
util.inherits(CopyObjectResultSet, choreography.ResultSet);
exports.CopyObject = CopyObject;


/*
    DeleteBucket
    Deletes a bucket from your Amazon S3 account.
*/


var DeleteBucket = function(session) {
    /*
        Create a new instance of the DeleteBucket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteBucket"
    DeleteBucket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBucketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBucketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBucket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBucketInputSet = function() {
    DeleteBucketInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that will be deleted.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBucket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBucketResultSet = function(resultStream) {
    DeleteBucketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that no content is returned for successful deletions.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBucket, choreography.Choreography);
util.inherits(DeleteBucketInputSet, choreography.InputSet);
util.inherits(DeleteBucketResultSet, choreography.ResultSet);
exports.DeleteBucket = DeleteBucket;


/*
    DeleteBucketCORS
    Deletes the CORS (Cross-Origin Resource Sharing) configuration information set for the specified bucket.
*/


var DeleteBucketCORS = function(session) {
    /*
        Create a new instance of the DeleteBucketCORS Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteBucketCORS"
    DeleteBucketCORS.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBucketCORSResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBucketCORSInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBucketCORS
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBucketCORSInputSet = function() {
    DeleteBucketCORSInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that the CORS configuration should be removed from.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBucketCORS Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBucketCORSResultSet = function(resultStream) {
    DeleteBucketCORSResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that for a successful exection, this API operation returns an empty 204 response.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBucketCORS, choreography.Choreography);
util.inherits(DeleteBucketCORSInputSet, choreography.InputSet);
util.inherits(DeleteBucketCORSResultSet, choreography.ResultSet);
exports.DeleteBucketCORS = DeleteBucketCORS;


/*
    DeleteBucketLifecycle
    Deletes the lifecycle configuration from the specified bucket.
*/


var DeleteBucketLifecycle = function(session) {
    /*
        Create a new instance of the DeleteBucketLifecycle Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteBucketLifecycle"
    DeleteBucketLifecycle.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBucketLifecycleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBucketLifecycleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBucketLifecycle
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBucketLifecycleInputSet = function() {
    DeleteBucketLifecycleInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the lifecycle you want to delete.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBucketLifecycle Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBucketLifecycleResultSet = function(resultStream) {
    DeleteBucketLifecycleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful delete operation, no content is returned, and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBucketLifecycle, choreography.Choreography);
util.inherits(DeleteBucketLifecycleInputSet, choreography.InputSet);
util.inherits(DeleteBucketLifecycleResultSet, choreography.ResultSet);
exports.DeleteBucketLifecycle = DeleteBucketLifecycle;


/*
    DeleteBucketPolicy
    Deletes the policy on a specified bucket.
*/


var DeleteBucketPolicy = function(session) {
    /*
        Create a new instance of the DeleteBucketPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteBucketPolicy"
    DeleteBucketPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBucketPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBucketPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBucketPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBucketPolicyInputSet = function() {
    DeleteBucketPolicyInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the policy you want to delete.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBucketPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBucketPolicyResultSet = function(resultStream) {
    DeleteBucketPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful delete operation, no content is returned, and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBucketPolicy, choreography.Choreography);
util.inherits(DeleteBucketPolicyInputSet, choreography.InputSet);
util.inherits(DeleteBucketPolicyResultSet, choreography.ResultSet);
exports.DeleteBucketPolicy = DeleteBucketPolicy;


/*
    DeleteBucketTagging
    Removes a billing tag set from the specified bucket.
*/


var DeleteBucketTagging = function(session) {
    /*
        Create a new instance of the DeleteBucketTagging Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteBucketTagging"
    DeleteBucketTagging.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBucketTaggingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBucketTaggingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBucketTagging
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBucketTaggingInputSet = function() {
    DeleteBucketTaggingInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to remove tags from.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBucketTagging Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBucketTaggingResultSet = function(resultStream) {
    DeleteBucketTaggingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. A successful execution returns an empty 204 response.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBucketTagging, choreography.Choreography);
util.inherits(DeleteBucketTaggingInputSet, choreography.InputSet);
util.inherits(DeleteBucketTaggingResultSet, choreography.ResultSet);
exports.DeleteBucketTagging = DeleteBucketTagging;


/*
    DeleteBucketWebsite
    Deletes the website configuration for the specified bucket.
*/


var DeleteBucketWebsite = function(session) {
    /*
        Create a new instance of the DeleteBucketWebsite Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteBucketWebsite"
    DeleteBucketWebsite.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteBucketWebsiteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteBucketWebsiteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteBucketWebsite
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteBucketWebsiteInputSet = function() {
    DeleteBucketWebsiteInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the website configuration you want to delete.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteBucketWebsite Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteBucketWebsiteResultSet = function(resultStream) {
    DeleteBucketWebsiteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful delete operation, no content is returned and this output variable is empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteBucketWebsite, choreography.Choreography);
util.inherits(DeleteBucketWebsiteInputSet, choreography.InputSet);
util.inherits(DeleteBucketWebsiteResultSet, choreography.ResultSet);
exports.DeleteBucketWebsite = DeleteBucketWebsite;


/*
    DeleteMultipleObjects
    Deletes multiple objects from an S3 Bucket.
*/


var DeleteMultipleObjects = function(session) {
    /*
        Create a new instance of the DeleteMultipleObjects Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteMultipleObjects"
    DeleteMultipleObjects.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteMultipleObjectsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteMultipleObjectsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteMultipleObjects
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteMultipleObjectsInputSet = function() {
    DeleteMultipleObjectsInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The the name of the bucket that contains the objects that you want to delete.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the FileNames input for this Choreo. ((required, string) A list of file names to delete (separated by commas).)
        */
        this.set_FileNames = function(value) {
            this.setInput("FileNames", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteMultipleObjects Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteMultipleObjectsResultSet = function(resultStream) {
    DeleteMultipleObjectsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that no content is returned for a successful delete operation.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteMultipleObjects, choreography.Choreography);
util.inherits(DeleteMultipleObjectsInputSet, choreography.InputSet);
util.inherits(DeleteMultipleObjectsResultSet, choreography.ResultSet);
exports.DeleteMultipleObjects = DeleteMultipleObjects;


/*
    DeleteObject
    Deletes a specified item from an Amazon S3 bucket.
*/


var DeleteObject = function(session) {
    /*
        Create a new instance of the DeleteObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/DeleteObject"
    DeleteObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteObjectInputSet = function() {
    DeleteObjectInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The the name of the bucket that contains the object that you want to delete.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The file name that you want to delete.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteObjectResultSet = function(resultStream) {
    DeleteObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that no content is returned for a successful delete operation.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(DeleteObject, choreography.Choreography);
util.inherits(DeleteObjectInputSet, choreography.InputSet);
util.inherits(DeleteObjectResultSet, choreography.ResultSet);
exports.DeleteObject = DeleteObject;


/*
    GetBase64EncodedObject
    Retrieves a specified item from an Amazon S3 bucket, returns the file content as base64-encoded data, and returns the values of key response headers as output variables if available.
*/


var GetBase64EncodedObject = function(session) {
    /*
        Create a new instance of the GetBase64EncodedObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBase64EncodedObject"
    GetBase64EncodedObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBase64EncodedObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBase64EncodedObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBase64EncodedObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBase64EncodedObjectInputSet = function() {
    GetBase64EncodedObjectInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that contains the object to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file to retrieve.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the IfMatch input for this Choreo. ((optional, string) Returns the object only if its entity tag (ETag) is the same as the one specified, otherwise returns a 412 (precondition failed) error.)
        */
        this.set_IfMatch = function(value) {
            this.setInput("IfMatch", value);
        }

        /*
        Set the value of the IfModifiedSince input for this Choreo. ((optional, date) Returns the object only if it has been modified since the specific time, otherwise returns a 304 (not modified) error.)
        */
        this.set_IfModifiedSince = function(value) {
            this.setInput("IfModifiedSince", value);
        }

        /*
        Set the value of the IfNoneMatch input for this Choreo. ((optional, string) Returns the object only if its entity tag (ETag) is different from the one specified, otherwise retuns a 304 (not modified) error. Will not work correctly with IfModifiedSince.)
        */
        this.set_IfNoneMatch = function(value) {
            this.setInput("IfNoneMatch", value);
        }

        /*
        Set the value of the IfUnmodifiedSince input for this Choreo. ((optional, date) Returns the object only if it has not been modified since the specified time, otherwise returns a 412 (precondition failed) error.)
        */
        this.set_IfUnmodifiedSince = function(value) {
            this.setInput("IfUnmodifiedSince", value);
        }

        /*
        Set the value of the Range input for this Choreo. ((optional, string) Downloads the specific range of bytes of an object. Ex: 0-9 (returns the first 10 bytes of an object), 100-1000, etc. If the range value exceeds the end of file, it will return up to the end of file.)
        */
        this.set_Range = function(value) {
            this.setInput("Range", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBase64EncodedObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBase64EncodedObjectResultSet = function(resultStream) {
    GetBase64EncodedObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) The base64-encoded contents of the file you are retrieving.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "WebsiteRedirectLocation" output from this Choreo execution. ((string) For a bucket configured as a website, this metadata can be set so the website will evaluate the request for the object as a 301 redirect to another object in the same bucket or an external URL.)
        */
        this.get_WebsiteRedirectLocation = function() {
            return this.getResult("WebsiteRedirectLocation");
        }
        /*
        Retrieve the value for the "Expiration" output from this Choreo execution. ((string) Appears if the object expiration is configured. It includes expiry-date and URL-encoded rule-id key value pairs providing object expiration information.)
        */
        this.get_Expiration = function() {
            return this.getResult("Expiration");
        }
        /*
        Retrieve the value for the "VersionID" output from this Choreo execution. ((string) Returns the version ID of the retrieved object if it has a unique version ID.)
        */
        this.get_VersionID = function() {
            return this.getResult("VersionID");
        }
        /*
        Retrieve the value for the "DeleteMarker" output from this Choreo execution. ((boolean) Returns true if the object retrieved was a Delete Marker otherwise no value.)
        */
        this.get_DeleteMarker = function() {
            return this.getResult("DeleteMarker");
        }
        /*
        Retrieve the value for the "ServerSideEncryption" output from this Choreo execution. ((string) If the object is stored using server-side encryption, response includes this header with value of the encryption algorithm used. Valid Values: AES256.)
        */
        this.get_ServerSideEncryption = function() {
            return this.getResult("ServerSideEncryption");
        }
        /*
        Retrieve the value for the "Restore" output from this Choreo execution. ((string) Provides information about the object restoration operation and expiration time of the restored object copy.)
        */
        this.get_Restore = function() {
            return this.getResult("Restore");
        }
}

util.inherits(GetBase64EncodedObject, choreography.Choreography);
util.inherits(GetBase64EncodedObjectInputSet, choreography.InputSet);
util.inherits(GetBase64EncodedObjectResultSet, choreography.ResultSet);
exports.GetBase64EncodedObject = GetBase64EncodedObject;


/*
    GetBucketACL
    Returns the access control list (ACL) of a bucket.
*/


var GetBucketACL = function(session) {
    /*
        Create a new instance of the GetBucketACL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketACL"
    GetBucketACL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketACLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketACLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketACL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketACLInputSet = function() {
    GetBucketACLInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the ACL you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketACL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketACLResultSet = function(resultStream) {
    GetBucketACLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketACL, choreography.Choreography);
util.inherits(GetBucketACLInputSet, choreography.InputSet);
util.inherits(GetBucketACLResultSet, choreography.ResultSet);
exports.GetBucketACL = GetBucketACL;


/*
    GetBucketCORS
    Retrieves the CORS (Cross-Origin Resource Sharing) configuration information set for the bucket.
*/


var GetBucketCORS = function(session) {
    /*
        Create a new instance of the GetBucketCORS Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketCORS"
    GetBucketCORS.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketCORSResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketCORSInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketCORS
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketCORSInputSet = function() {
    GetBucketCORSInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to retrieve the CORS configuration for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketCORS Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketCORSResultSet = function(resultStream) {
    GetBucketCORSResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketCORS, choreography.Choreography);
util.inherits(GetBucketCORSInputSet, choreography.InputSet);
util.inherits(GetBucketCORSResultSet, choreography.ResultSet);
exports.GetBucketCORS = GetBucketCORS;


/*
    GetBucketLifecycle
    Returns the lifecycle configuration information set on the bucket.
*/


var GetBucketLifecycle = function(session) {
    /*
        Create a new instance of the GetBucketLifecycle Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketLifecycle"
    GetBucketLifecycle.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketLifecycleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketLifecycleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketLifecycle
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketLifecycleInputSet = function() {
    GetBucketLifecycleInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the lifecycle you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketLifecycle Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketLifecycleResultSet = function(resultStream) {
    GetBucketLifecycleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketLifecycle, choreography.Choreography);
util.inherits(GetBucketLifecycleInputSet, choreography.InputSet);
util.inherits(GetBucketLifecycleResultSet, choreography.ResultSet);
exports.GetBucketLifecycle = GetBucketLifecycle;


/*
    GetBucketList
    Retrieves a list of the items that are in a specified Amazon S3 storage bucket.
*/


var GetBucketList = function(session) {
    /*
        Create a new instance of the GetBucketList Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketList"
    GetBucketList.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketListResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketListInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketList
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketListInputSet = function() {
    GetBucketListInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that contains the list of objects that you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the Delimiter input for this Choreo. ((optional, string) A delimiter is a character you use to group keys. All keys that contain the delimiter are grouped under a single result element, Common Prefixes. For more information see Amazon documentation.)
        */
        this.set_Delimiter = function(value) {
            this.setInput("Delimiter", value);
        }

        /*
        Set the value of the Marker input for this Choreo. ((optional, string) Specifies the key to start with when listing objects in a bucket. Amazon S3 lists objects in alphabetical order.)
        */
        this.set_Marker = function(value) {
            this.setInput("Marker", value);
        }

        /*
        Set the value of the MaxKeys input for this Choreo. ((optional, string) Lowers the max number of keys returned in the response from 1000 to specified value.The response will contain the key IsTruncated (true) if there are additional keys that exceed the # of MaxKeys.)
        */
        this.set_MaxKeys = function(value) {
            this.setInput("MaxKeys", value);
        }

        /*
        Set the value of the Prefix input for this Choreo. ((optional, string) Limits the response to keys that begin with the specified prefix - useful for separating a bucket into different groupings of keys. Ex: specify 'test' to get a list of objects starting with 'test'.)
        */
        this.set_Prefix = function(value) {
            this.setInput("Prefix", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketList Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketListResultSet = function(resultStream) {
    GetBucketListResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketList, choreography.Choreography);
util.inherits(GetBucketListInputSet, choreography.InputSet);
util.inherits(GetBucketListResultSet, choreography.ResultSet);
exports.GetBucketList = GetBucketList;


/*
    GetBucketLocation
    Returns the Region where the bucket is stored. 
*/


var GetBucketLocation = function(session) {
    /*
        Create a new instance of the GetBucketLocation Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketLocation"
    GetBucketLocation.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketLocationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketLocationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketLocation
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketLocationInputSet = function() {
    GetBucketLocationInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the location you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketLocation Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketLocationResultSet = function(resultStream) {
    GetBucketLocationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "LocationConstraint" output from this Choreo execution. ((string) The Region returned by the choreo. Valid values: blank (Default US Classic Region AKA us-east-1), EU (AKA eu-west-1), us-west-1, us-west-2, ap-southeast-1, ap-southeast-2, ap-northeast-1, sa-east-1.)
        */
        this.get_LocationConstraint = function() {
            return this.getResult("LocationConstraint");
        }
}

util.inherits(GetBucketLocation, choreography.Choreography);
util.inherits(GetBucketLocationInputSet, choreography.InputSet);
util.inherits(GetBucketLocationResultSet, choreography.ResultSet);
exports.GetBucketLocation = GetBucketLocation;


/*
    GetBucketLogging
    Retrieves the logging status and user logging permissions for the specified bucket.
*/


var GetBucketLogging = function(session) {
    /*
        Create a new instance of the GetBucketLogging Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketLogging"
    GetBucketLogging.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketLoggingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketLoggingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketLogging
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketLoggingInputSet = function() {
    GetBucketLoggingInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to retrieve logging information for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketLogging Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketLoggingResultSet = function(resultStream) {
    GetBucketLoggingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketLogging, choreography.Choreography);
util.inherits(GetBucketLoggingInputSet, choreography.InputSet);
util.inherits(GetBucketLoggingResultSet, choreography.ResultSet);
exports.GetBucketLogging = GetBucketLogging;


/*
    GetBucketNotification
    Retrieves the notification configuration of a specified bucket.
*/


var GetBucketNotification = function(session) {
    /*
        Create a new instance of the GetBucketNotification Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketNotification"
    GetBucketNotification.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketNotificationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketNotificationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketNotification
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketNotificationInputSet = function() {
    GetBucketNotificationInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to retrieve notification information for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketNotification Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketNotificationResultSet = function(resultStream) {
    GetBucketNotificationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note - if there is no notification configured or notifications are turned off the response will be an empty xml result set or json object (depending on ResponseFormat input).)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketNotification, choreography.Choreography);
util.inherits(GetBucketNotificationInputSet, choreography.InputSet);
util.inherits(GetBucketNotificationResultSet, choreography.ResultSet);
exports.GetBucketNotification = GetBucketNotification;


/*
    GetBucketPolicy
    Returns the policy of a specified bucket.
*/


var GetBucketPolicy = function(session) {
    /*
        Create a new instance of the GetBucketPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketPolicy"
    GetBucketPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketPolicyInputSet = function() {
    GetBucketPolicyInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the policy you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketPolicyResultSet = function(resultStream) {
    GetBucketPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketPolicy, choreography.Choreography);
util.inherits(GetBucketPolicyInputSet, choreography.InputSet);
util.inherits(GetBucketPolicyResultSet, choreography.ResultSet);
exports.GetBucketPolicy = GetBucketPolicy;


/*
    GetBucketRequestPayment
    Retrieves the request payment configuration of a specified bucket.
*/


var GetBucketRequestPayment = function(session) {
    /*
        Create a new instance of the GetBucketRequestPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketRequestPayment"
    GetBucketRequestPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketRequestPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketRequestPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketRequestPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketRequestPaymentInputSet = function() {
    GetBucketRequestPaymentInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to retrieve request payment configuration information for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketRequestPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketRequestPaymentResultSet = function(resultStream) {
    GetBucketRequestPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketRequestPayment, choreography.Choreography);
util.inherits(GetBucketRequestPaymentInputSet, choreography.InputSet);
util.inherits(GetBucketRequestPaymentResultSet, choreography.ResultSet);
exports.GetBucketRequestPayment = GetBucketRequestPayment;


/*
    GetBucketTagging
    Retrieves the billing tag set associated with the specified bucket.
*/


var GetBucketTagging = function(session) {
    /*
        Create a new instance of the GetBucketTagging Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketTagging"
    GetBucketTagging.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketTaggingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketTaggingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketTagging
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketTaggingInputSet = function() {
    GetBucketTaggingInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to retrieve tagging information for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketTagging Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketTaggingResultSet = function(resultStream) {
    GetBucketTaggingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketTagging, choreography.Choreography);
util.inherits(GetBucketTaggingInputSet, choreography.InputSet);
util.inherits(GetBucketTaggingResultSet, choreography.ResultSet);
exports.GetBucketTagging = GetBucketTagging;


/*
    GetBucketVersioning
    Retrieves the versioning state of a specified bucket.
*/


var GetBucketVersioning = function(session) {
    /*
        Create a new instance of the GetBucketVersioning Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketVersioning"
    GetBucketVersioning.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketVersioningResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketVersioningInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketVersioning
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketVersioningInputSet = function() {
    GetBucketVersioningInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to retrieve versioning information for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketVersioning Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketVersioningResultSet = function(resultStream) {
    GetBucketVersioningResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetBucketVersioning, choreography.Choreography);
util.inherits(GetBucketVersioningInputSet, choreography.InputSet);
util.inherits(GetBucketVersioningResultSet, choreography.ResultSet);
exports.GetBucketVersioning = GetBucketVersioning;


/*
    GetBucketWebsite
    Returns the website configuration and static URL of a bucket if it is setup as a website.
*/


var GetBucketWebsite = function(session) {
    /*
        Create a new instance of the GetBucketWebsite Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetBucketWebsite"
    GetBucketWebsite.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetBucketWebsiteResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetBucketWebsiteInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetBucketWebsite
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetBucketWebsiteInputSet = function() {
    GetBucketWebsiteInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the website configuration you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Valid values are "xml" (the default) and "json".)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetBucketWebsite Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetBucketWebsiteResultSet = function(resultStream) {
    GetBucketWebsiteResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
        /*
        Retrieve the value for the "StaticURL" output from this Choreo execution. ((string) The URL of the Amazon static website. Note that the region code included in the URL is required for static websites.)
        */
        this.get_StaticURL = function() {
            return this.getResult("StaticURL");
        }
}

util.inherits(GetBucketWebsite, choreography.Choreography);
util.inherits(GetBucketWebsiteInputSet, choreography.InputSet);
util.inherits(GetBucketWebsiteResultSet, choreography.ResultSet);
exports.GetBucketWebsite = GetBucketWebsite;


/*
    GetObjectACL
    Returns the access control list (ACL) of a file or object.
*/


var GetObjectACL = function(session) {
    /*
        Create a new instance of the GetObjectACL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetObjectACL"
    GetObjectACL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetObjectACLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetObjectACLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetObjectACL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetObjectACLInputSet = function() {
    GetObjectACLInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket associated with the ACL you want to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) Name of the file or object you wish to retrieve the ACL for. Ex.: filename.txt or folder/filename.txt.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the ResponseFormat input for this Choreo. ((optional, string) The format that the response should be in. Can be set to xml or json. Defaults to xml.)
        */
        this.set_ResponseFormat = function(value) {
            this.setInput("ResponseFormat", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetObjectACL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetObjectACLResultSet = function(resultStream) {
    GetObjectACLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetObjectACL, choreography.Choreography);
util.inherits(GetObjectACLInputSet, choreography.InputSet);
util.inherits(GetObjectACLResultSet, choreography.ResultSet);
exports.GetObjectACL = GetObjectACL;


/*
    GetObjectTorrent
    Returns a base64-encoded torrent file from an Amazon S3 bucket.
*/


var GetObjectTorrent = function(session) {
    /*
        Create a new instance of the GetObjectTorrent Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetObjectTorrent"
    GetObjectTorrent.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetObjectTorrentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetObjectTorrentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetObjectTorrent
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetObjectTorrentInputSet = function() {
    GetObjectTorrentInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that contains the object to retrieve.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the torrent file to retrieve.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the GetObjectTorrent Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetObjectTorrentResultSet = function(resultStream) {
    GetObjectTorrentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The retrieved file. The response is a Bencoded dictionary as defined by the BitTorrent specification, which is then Base64-encoded by Temboo. Decode to get the Bencoded dictionary.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetObjectTorrent, choreography.Choreography);
util.inherits(GetObjectTorrentInputSet, choreography.InputSet);
util.inherits(GetObjectTorrentResultSet, choreography.ResultSet);
exports.GetObjectTorrent = GetObjectTorrent;


/*
    GetService
    Retrieves a list of buckets owned by the authenticated user.
*/


var GetService = function(session) {
    /*
        Create a new instance of the GetService Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/GetService"
    GetService.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new GetServiceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new GetServiceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the GetService
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var GetServiceInputSet = function() {
    GetServiceInputSet.super_.call(this);
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

}

/*
A ResultSet with methods tailored to the values returned by the GetService Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var GetServiceResultSet = function(resultStream) {
    GetServiceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(GetService, choreography.Choreography);
util.inherits(GetServiceInputSet, choreography.InputSet);
util.inherits(GetServiceResultSet, choreography.ResultSet);
exports.GetService = GetService;


/*
    PutBucket
    Creates a new bucket in your Amazon S3 account.
*/


var PutBucket = function(session) {
    /*
        Create a new instance of the PutBucket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucket"
    PutBucket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketInputSet = function() {
    PutBucketInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that will be created.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((optional, string) By default all objects are private (only owner has full access control). Valid values: private, public-read, public-read-write, authenticated-read, bucket-owner-read, bucket-owner-full-control.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the LocationConstraint input for this Choreo. ((optional, string) The region to create the bucket in. Valid Values: EU, eu-west-1, us-west-1, us-west-2, ap-southeast-1, ap-southeast-2, ap-northeast-1, sa-east-1, empty string (Default US Classic Region). )
        */
        this.set_LocationConstraint = function(value) {
            this.setInput("LocationConstraint", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketResultSet = function(resultStream) {
    PutBucketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that no content is returned for successful uploads.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucket, choreography.Choreography);
util.inherits(PutBucketInputSet, choreography.InputSet);
util.inherits(PutBucketResultSet, choreography.ResultSet);
exports.PutBucket = PutBucket;


/*
    PutBucketACL
    Sets the access control list (ACL) permissions for an existing bucket.
*/


var PutBucketACL = function(session) {
    /*
        Create a new instance of the PutBucketACL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketACL"
    PutBucketACL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketACLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketACLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketACL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketACLInputSet = function() {
    PutBucketACLInputSet.super_.call(this);
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
        Set the value of the AccessControlList input for this Choreo. ((optional, xml) Custom Access Control List xml for advanced configuration. See description for an example, plus Amazon documentation.)
        */
        this.set_AccessControlList = function(value) {
            this.setInput("AccessControlList", value);
        }

        /*
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to create or update a policy for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((conditional, string) Most common ACL usage, required unless creating a custom policy. Values: private, public-read, public-read-write, or authenticated-read.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the OwnerEmailAddress input for this Choreo. ((optional, string) The email address of the owner who is granting permission. Required if creating your own custom ACL policy.)
        */
        this.set_OwnerEmailAddress = function(value) {
            this.setInput("OwnerEmailAddress", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The canonical user ID of the owner who is granting permission. Required if creating your own custom ACL policy.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketACL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketACLResultSet = function(resultStream) {
    PutBucketACLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful ACL creation, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketACL, choreography.Choreography);
util.inherits(PutBucketACLInputSet, choreography.InputSet);
util.inherits(PutBucketACLResultSet, choreography.ResultSet);
exports.PutBucketACL = PutBucketACL;


/*
    PutBucketCORS
    Sets the CORS (Cross-Origin Resource Sharing) configuration for a specified bucket.
*/


var PutBucketCORS = function(session) {
    /*
        Create a new instance of the PutBucketCORS Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketCORS"
    PutBucketCORS.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketCORSResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketCORSInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketCORS
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketCORSInputSet = function() {
    PutBucketCORSInputSet.super_.call(this);
        /*
        Set the value of the CORSConfiguration input for this Choreo. ((optional, xml) The CORS Configuration XML containing one or more CORS Rules for advanced configuration. If provided the Choreo will ignore all other inputs except your AWS Key/Secret and BucketName.)
        */
        this.set_CORSConfiguration = function(value) {
            this.setInput("CORSConfiguration", value);
        }

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
        Set the value of the AllowedHeader input for this Choreo. ((optional, string) Specifies which headers are allowed in a pre-flight OPTIONS request via the Access-Control-Request-Headers header.)
        */
        this.set_AllowedHeader = function(value) {
            this.setInput("AllowedHeader", value);
        }

        /*
        Set the value of the AllowedMethod input for this Choreo. ((conditional, string) The HTTP verb that you want to allow the origin to execute. Valid values are: GET, PUT, HEAD, POST, DELETE.)
        */
        this.set_AllowedMethod = function(value) {
            this.setInput("AllowedMethod", value);
        }

        /*
        Set the value of the AllowedOrigin input for this Choreo. ((conditional, string) An origin that you want to allow cross-domain requests from. This can contain at most one * wild character (i.e. http://*.example.com).)
        */
        this.set_AllowedOrigin = function(value) {
            this.setInput("AllowedOrigin", value);
        }

        /*
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to set a CORS configuration for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the ExposeHeader input for this Choreo. ((optional, string) A header in the response that you want customers to be able to access from their applications.)
        */
        this.set_ExposeHeader = function(value) {
            this.setInput("ExposeHeader", value);
        }

        /*
        Set the value of the ID input for this Choreo. ((optional, string) A unique identifier for the rule. The ID value can be up to 255 characters long.)
        */
        this.set_ID = function(value) {
            this.setInput("ID", value);
        }

        /*
        Set the value of the MaxAgeSeconds input for this Choreo. ((optional, integer) The time in seconds that your browser is to cache the preflight response for the specified resource.)
        */
        this.set_MaxAgeSeconds = function(value) {
            this.setInput("MaxAgeSeconds", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketCORS Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketCORSResultSet = function(resultStream) {
    PutBucketCORSResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that for a successful exection, this API operation returns an empty 200 response.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketCORS, choreography.Choreography);
util.inherits(PutBucketCORSInputSet, choreography.InputSet);
util.inherits(PutBucketCORSResultSet, choreography.ResultSet);
exports.PutBucketCORS = PutBucketCORS;


/*
    PutBucketLifecycle
    Sets lifecycle configuration for your bucket. This is used to remove objects from a bucket automatically after a certain time or at a certain date.
*/


var PutBucketLifecycle = function(session) {
    /*
        Create a new instance of the PutBucketLifecycle Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketLifecycle"
    PutBucketLifecycle.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketLifecycleResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketLifecycleInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketLifecycle
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketLifecycleInputSet = function() {
    PutBucketLifecycleInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to create or update a policy for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CustomLifecycleConfiguration input for this Choreo. ((optional, xml) Write a custom LifecycleConfiguration xml request for advanced customization. Note - this will overwrite all other inputs other than the AWS AccessKeyId, SecretKeyId, and BucketName.)
        */
        this.set_CustomLifecycleConfiguration = function(value) {
            this.setInput("CustomLifecycleConfiguration", value);
        }

        /*
        Set the value of the DateOfExpiration input for this Choreo. ((optional, date) Date when the rule takes effect. You can specify either DateOfExpiration OR NumberOfDays. The date value must be in ISO 8601 format, time is always midnight UTC. Ex: 2013-04-24T00:00:00.000Z.)
        */
        this.set_DateOfExpiration = function(value) {
            this.setInput("DateOfExpiration", value);
        }

        /*
        Set the value of the LifecycleId input for this Choreo. ((optional, string) A unique ID for this lifecycle (i.e. delete-logs-in-30-days-rule).)
        */
        this.set_LifecycleId = function(value) {
            this.setInput("LifecycleId", value);
        }

        /*
        Set the value of the NumberOfDays input for this Choreo. ((conditional, integer) The number of days to wait until the lifecycle expiration kicks in. Required unless you specify DateOfExpiration or a CustomLifecycleConfiguration instead.)
        */
        this.set_NumberOfDays = function(value) {
            this.setInput("NumberOfDays", value);
        }

        /*
        Set the value of the Prefix input for this Choreo. ((optional, string) Indicating that objects with this prefix will expire and be removed after the number of days specified. If not specified this lifecycle will apply to all objects in the bucket.)
        */
        this.set_Prefix = function(value) {
            this.setInput("Prefix", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((optional, string) The lifecycle status. Accepted values are: "Enabled" or "Disabled". Defaults to "Enabled".)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketLifecycle Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketLifecycleResultSet = function(resultStream) {
    PutBucketLifecycleResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful lifecycle creation, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketLifecycle, choreography.Choreography);
util.inherits(PutBucketLifecycleInputSet, choreography.InputSet);
util.inherits(PutBucketLifecycleResultSet, choreography.ResultSet);
exports.PutBucketLifecycle = PutBucketLifecycle;


/*
    PutBucketLogging
    Sets the logging parameters for a bucket and specifies permissions for who can view and modify the logging parameters. Can also be used to disable logging.
*/


var PutBucketLogging = function(session) {
    /*
        Create a new instance of the PutBucketLogging Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketLogging"
    PutBucketLogging.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketLoggingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketLoggingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketLogging
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketLoggingInputSet = function() {
    PutBucketLoggingInputSet.super_.call(this);
        /*
        Set the value of the BucketLoggingStatus input for this Choreo. ((optional, xml) An XML file that allows custom config, this can be used as an alternative to the other bucket logging inputs. If provided, the Choreo will ignore all inputs except your AWS Key/Secret and BucketName.)
        */
        this.set_BucketLoggingStatus = function(value) {
            this.setInput("BucketLoggingStatus", value);
        }

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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that you are setting the logging for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the EmailAddress input for this Choreo. ((conditional, string) The email address of the person being granted logging permissions.)
        */
        this.set_EmailAddress = function(value) {
            this.setInput("EmailAddress", value);
        }

        /*
        Set the value of the Permission input for this Choreo. ((conditional, string) The logging permissions given to the Grantee for the bucket. Valid values are: FULL_CONTROL, READ, or WRITE.)
        */
        this.set_Permission = function(value) {
            this.setInput("Permission", value);
        }

        /*
        Set the value of the TargetBucket input for this Choreo. ((conditional, string) The name of the target bucket. To disable logging, just leave this blank.)
        */
        this.set_TargetBucket = function(value) {
            this.setInput("TargetBucket", value);
        }

        /*
        Set the value of the TargetPrefix input for this Choreo. ((conditional, string) Lets you specify a prefix for the keys that the log files will be stored under. Defaults to "/logs")
        */
        this.set_TargetPrefix = function(value) {
            this.setInput("TargetPrefix", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketLogging Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketLoggingResultSet = function(resultStream) {
    PutBucketLoggingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. A successful execution returns an empty 200 response.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketLogging, choreography.Choreography);
util.inherits(PutBucketLoggingInputSet, choreography.InputSet);
util.inherits(PutBucketLoggingResultSet, choreography.ResultSet);
exports.PutBucketLogging = PutBucketLogging;


/*
    PutBucketNotification
    Enables Amazon SNS notifications of specified events for a bucket.
*/


var PutBucketNotification = function(session) {
    /*
        Create a new instance of the PutBucketNotification Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketNotification"
    PutBucketNotification.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketNotificationResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketNotificationInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketNotification
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketNotificationInputSet = function() {
    PutBucketNotificationInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to create a notification for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the Event input for this Choreo. ((optional, string) A bucket event for which to send notifications. Valid value:  "s3:ReducedRedundancyLostObject" (The default and currently only supported notification event).)
        */
        this.set_Event = function(value) {
            this.setInput("Event", value);
        }

        /*
        Set the value of the Topic input for this Choreo. ((conditional, string) The Amazon SNS topic arn that  Amazon S3 will publish a message to report the specified events for the bucket. If this is not supplied, notifications will be turned off.)
        */
        this.set_Topic = function(value) {
            this.setInput("Topic", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketNotification Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketNotificationResultSet = function(resultStream) {
    PutBucketNotificationResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((string) Stores the response from Amazon. Note that for a successful execution, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketNotification, choreography.Choreography);
util.inherits(PutBucketNotificationInputSet, choreography.InputSet);
util.inherits(PutBucketNotificationResultSet, choreography.ResultSet);
exports.PutBucketNotification = PutBucketNotification;


/*
    PutBucketPolicy
    Allows you to add to or replace a policy on a bucket.
*/


var PutBucketPolicy = function(session) {
    /*
        Create a new instance of the PutBucketPolicy Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketPolicy"
    PutBucketPolicy.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketPolicyResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketPolicyInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketPolicy
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketPolicyInputSet = function() {
    PutBucketPolicyInputSet.super_.call(this);
        /*
        Set the value of the Policy input for this Choreo. ((required, json) A JSON string containing the policy information.  See Choreo documentation for a sample JSON policy.)
        */
        this.set_Policy = function(value) {
            this.setInput("Policy", value);
        }

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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to create or update a policy for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketPolicy Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketPolicyResultSet = function(resultStream) {
    PutBucketPolicyResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful policy creation, no content is returned and this output variable is empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketPolicy, choreography.Choreography);
util.inherits(PutBucketPolicyInputSet, choreography.InputSet);
util.inherits(PutBucketPolicyResultSet, choreography.ResultSet);
exports.PutBucketPolicy = PutBucketPolicy;


/*
    PutBucketRequestPayment
    Sets the request payment configuration of a bucket. 
*/


var PutBucketRequestPayment = function(session) {
    /*
        Create a new instance of the PutBucketRequestPayment Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketRequestPayment"
    PutBucketRequestPayment.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketRequestPaymentResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketRequestPaymentInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketRequestPayment
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketRequestPaymentInputSet = function() {
    PutBucketRequestPaymentInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to create a request payment configuration for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the Payer input for this Choreo. ((required, string) Specifies who pays for the download and request fees. Valid values:  Requester or BucketOwner.)
        */
        this.set_Payer = function(value) {
            this.setInput("Payer", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketRequestPayment Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketRequestPaymentResultSet = function(resultStream) {
    PutBucketRequestPaymentResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful execution, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketRequestPayment, choreography.Choreography);
util.inherits(PutBucketRequestPaymentInputSet, choreography.InputSet);
util.inherits(PutBucketRequestPaymentResultSet, choreography.ResultSet);
exports.PutBucketRequestPayment = PutBucketRequestPayment;


/*
    PutBucketTagging
    Adds a set of billing tags to an existing bucket.
*/


var PutBucketTagging = function(session) {
    /*
        Create a new instance of the PutBucketTagging Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketTagging"
    PutBucketTagging.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketTaggingResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketTaggingInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketTagging
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketTaggingInputSet = function() {
    PutBucketTaggingInputSet.super_.call(this);
        /*
        Set the value of the Tags input for this Choreo. ((optional, xml) An XML file describing the key/values for the tag set. Note - if you use this input, the Key and Value input variables will be ignored.)
        */
        this.set_Tags = function(value) {
            this.setInput("Tags", value);
        }

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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to add tags to.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the Key input for this Choreo. ((conditional, string) The tag name.)
        */
        this.set_Key = function(value) {
            this.setInput("Key", value);
        }

        /*
        Set the value of the Value input for this Choreo. ((conditional, string) The tag value.)
        */
        this.set_Value = function(value) {
            this.setInput("Value", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketTagging Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketTaggingResultSet = function(resultStream) {
    PutBucketTaggingResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful execution, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketTagging, choreography.Choreography);
util.inherits(PutBucketTaggingInputSet, choreography.InputSet);
util.inherits(PutBucketTaggingResultSet, choreography.ResultSet);
exports.PutBucketTagging = PutBucketTagging;


/*
    PutBucketVersioning
    Sets the versioning state of an existing bucket.
*/


var PutBucketVersioning = function(session) {
    /*
        Create a new instance of the PutBucketVersioning Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketVersioning"
    PutBucketVersioning.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketVersioningResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketVersioningInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketVersioning
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketVersioningInputSet = function() {
    PutBucketVersioningInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket to create a notification for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the Status input for this Choreo. ((required, string) Indicates whether or not the bucket has versioning enabled. Valid values are: Enabled or Suspended (case-sensitive).)
        */
        this.set_Status = function(value) {
            this.setInput("Status", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketVersioning Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketVersioningResultSet = function(resultStream) {
    PutBucketVersioningResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful execution, no content is returned and this output variable should be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketVersioning, choreography.Choreography);
util.inherits(PutBucketVersioningInputSet, choreography.InputSet);
util.inherits(PutBucketVersioningResultSet, choreography.ResultSet);
exports.PutBucketVersioning = PutBucketVersioning;


/*
    PutBucketWebsiteRedirect
    Configures the specified bucket as a website and sets the web request redirects to a designated endpoint.
*/


var PutBucketWebsiteRedirect = function(session) {
    /*
        Create a new instance of the PutBucketWebsiteRedirect Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketWebsiteRedirect"
    PutBucketWebsiteRedirect.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketWebsiteRedirectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketWebsiteRedirectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketWebsiteRedirect
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketWebsiteRedirectInputSet = function() {
    PutBucketWebsiteRedirectInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that you wish to configure.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CustomWebsiteRedirection input for this Choreo. ((optional, xml) A custom xml file for adding advanced website redirection rule(s). See description and Amazon  docs for details. Note - inputting a custom xml file will overwrite all other optional input values.)
        */
        this.set_CustomWebsiteRedirection = function(value) {
            this.setInput("CustomWebsiteRedirection", value);
        }

        /*
        Set the value of the ErrorDocument input for this Choreo. ((optional, string) The object key name to use when a 4XX class error occurs. Returns specified page when such an error occurs. Ex.: Error.html.)
        */
        this.set_ErrorDocument = function(value) {
            this.setInput("ErrorDocument", value);
        }

        /*
        Set the value of the HostName input for this Choreo. ((optional, string) Name of the host where requests will be redirected. Used when setting redirect rules, optional if specifying ReplaceKeyPrefixWith or ReplaceKeyWith input variables). Ex.: example.com.)
        */
        this.set_HostName = function(value) {
            this.setInput("HostName", value);
        }

        /*
        Set the value of the HttpErrorCodeReturnedEquals input for this Choreo. ((optional, string) The HTTP error code condition for which a redirect occurs. If there's an error and the error code equals this value, then the specified redirect is applied. Can use with KeyPrefixEquals. Ex:  404.)
        */
        this.set_HttpErrorCodeReturnedEquals = function(value) {
            this.setInput("HttpErrorCodeReturnedEquals", value);
        }

        /*
        Set the value of the HttpRedirectCode input for this Choreo. ((optional, string) The HTTP redirect code to use on the response.)
        */
        this.set_HttpRedirectCode = function(value) {
            this.setInput("HttpRedirectCode", value);
        }

        /*
        Set the value of the KeyPrefixEquals input for this Choreo. ((optional, string) The name or prefix condition of the object that will trigger the redirect action. Can use with HttpErrorCodeReturnedEquals. Ex:  Single page: ExamplePage.html, All pages with prefix: /images.)
        */
        this.set_KeyPrefixEquals = function(value) {
            this.setInput("KeyPrefixEquals", value);
        }

        /*
        Set the value of the Protocol input for this Choreo. ((optional, string) Sets protocol to use when redirecting requests. Optional if you are specifying either ReplaceKeyPrefixWith or ReplaceKeyWith optional inputs. Possible values: http, https.)
        */
        this.set_Protocol = function(value) {
            this.setInput("Protocol", value);
        }

        /*
        Set the value of the ReplaceKeyPrefixWith input for this Choreo. ((optional, string) The object key prefix to use in the redirect request. Redirects requests to the specified prefix. Cannot be used with ReplaceKeyWith. Ex.: /documents.)
        */
        this.set_ReplaceKeyPrefixWith = function(value) {
            this.setInput("ReplaceKeyPrefixWith", value);
        }

        /*
        Set the value of the ReplaceKeyWith input for this Choreo. ((optional, string) The specific object key to use in the redirect request. Cannot be used with ReplaceKeyPrefixWith. Ex.: error.html.)
        */
        this.set_ReplaceKeyWith = function(value) {
            this.setInput("ReplaceKeyWith", value);
        }

        /*
        Set the value of the Suffix input for this Choreo. ((optional, string) The default page returned when there is a request to a directory. I.e.: if you input index.html, a request for /images/ will return the data for the object '/images/index.html'. Default is index.html.)
        */
        this.set_Suffix = function(value) {
            this.setInput("Suffix", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketWebsiteRedirect Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketWebsiteRedirectResultSet = function(resultStream) {
    PutBucketWebsiteRedirectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful website configuration request, no content is returned and this output variable will be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketWebsiteRedirect, choreography.Choreography);
util.inherits(PutBucketWebsiteRedirectInputSet, choreography.InputSet);
util.inherits(PutBucketWebsiteRedirectResultSet, choreography.ResultSet);
exports.PutBucketWebsiteRedirect = PutBucketWebsiteRedirect;


/*
    PutBucketWebsiteRedirectAll
    Configures the specified bucket as a website and redirects all web requests to the designated hostname.
*/


var PutBucketWebsiteRedirectAll = function(session) {
    /*
        Create a new instance of the PutBucketWebsiteRedirectAll Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutBucketWebsiteRedirectAll"
    PutBucketWebsiteRedirectAll.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutBucketWebsiteRedirectAllResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutBucketWebsiteRedirectAllInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutBucketWebsiteRedirectAll
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutBucketWebsiteRedirectAllInputSet = function() {
    PutBucketWebsiteRedirectAllInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that you wish to configure.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the HostName input for this Choreo. ((required, string) Name of the host where requests will be redirected. Ex.: example.com)
        */
        this.set_HostName = function(value) {
            this.setInput("HostName", value);
        }

        /*
        Set the value of the Protocol input for this Choreo. ((optional, string) Protocol to use (http, https) when redirecting requests. The default is http.)
        */
        this.set_Protocol = function(value) {
            this.setInput("Protocol", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutBucketWebsiteRedirectAll Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutBucketWebsiteRedirectAllResultSet = function(resultStream) {
    PutBucketWebsiteRedirectAllResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful website configuration request, no content is returned and this output variable will be empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutBucketWebsiteRedirectAll, choreography.Choreography);
util.inherits(PutBucketWebsiteRedirectAllInputSet, choreography.InputSet);
util.inherits(PutBucketWebsiteRedirectAllResultSet, choreography.ResultSet);
exports.PutBucketWebsiteRedirectAll = PutBucketWebsiteRedirectAll;


/*
    PutObject
    Uploads a file to your Amazon S3 storage bucket.
*/


var PutObject = function(session) {
    /*
        Create a new instance of the PutObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutObject"
    PutObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutObjectInputSet = function() {
    PutObjectInputSet.super_.call(this);
        /*
        Set the value of the FileContents input for this Choreo. ((required, string) The Base64-encoded file contents that you want to upload to an AmazonS3 bucket. This is required unless providing a URL to a hosted file to upload, using the UploadSourceURL input.)
        */
        this.set_FileContents = function(value) {
            this.setInput("FileContents", value);
        }

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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that will be the file destination.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((optional, string) By default all objects are private (only owner has full access control). Valid values: private, public-read, public-read-write, authenticated-read, bucket-owner-read, bucket-owner-full-control.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the ContentType input for this Choreo. ((optional, string) Sets the content-type (text/html, image/jpeg, etc.). Default is application/octet-stream.)
        */
        this.set_ContentType = function(value) {
            this.setInput("ContentType", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file to put in S3 Storage. Ex.: file.txt or folder/file.txt)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the ServerSideEncryption input for this Choreo. ((optional, string) Specifies the server-side encryption algorithm to use when Amazon S3 creates the target object. Valid value: AES256.)
        */
        this.set_ServerSideEncryption = function(value) {
            this.setInput("ServerSideEncryption", value);
        }

        /*
        Set the value of the StorageClass input for this Choreo. ((optional, string) Enables RRS customers to store their noncritical, reproducible data at lower levels of redundancy than Amazon S3's standard storage. Valid Values: STANDARD (default), REDUCED_REDUNDANCY.)
        */
        this.set_StorageClass = function(value) {
            this.setInput("StorageClass", value);
        }

        /*
        Set the value of the UploadSourcePassword input for this Choreo. ((optional, string) The password to use when Basic Authentiation is required to access a file located at the URL specified in the UploadSourceURL input.)
        */
        this.set_UploadSourcePassword = function(value) {
            this.setInput("UploadSourcePassword", value);
        }

        /*
        Set the value of the UploadSourceURL input for this Choreo. ((optional, string) A URL to a hosted file that should be uploaded. This is required unless providing a Base64 encoded file for the FileContents input.)
        */
        this.set_UploadSourceURL = function(value) {
            this.setInput("UploadSourceURL", value);
        }

        /*
        Set the value of the UploadSourceUsername input for this Choreo. ((optional, string) The username to use when Basic Authentiation is required to access a file located at the URL specified in the UploadSourceURL input.)
        */
        this.set_UploadSourceUsername = function(value) {
            this.setInput("UploadSourceUsername", value);
        }

        /*
        Set the value of the WebsiteRedirectLocation input for this Choreo. ((optional, string) If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Ex: /anotherPage.html, http://www.page.com. Max length: 2 K.)
        */
        this.set_WebsiteRedirectLocation = function(value) {
            this.setInput("WebsiteRedirectLocation", value);
        }

        /*
        Set the value of the VaultFile input for this Choreo. ((optional, vault file) The path to a vault file that you want to upload to an Amazon S3 bucket. Required unless using the FileContents input variable.)
        */

}

/*
A ResultSet with methods tailored to the values returned by the PutObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutObjectResultSet = function(resultStream) {
    PutObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (The response from Amazon. Note that no content is returned for successful uploads.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutObject, choreography.Choreography);
util.inherits(PutObjectInputSet, choreography.InputSet);
util.inherits(PutObjectResultSet, choreography.ResultSet);
exports.PutObject = PutObject;


/*
    PutObjectACL
    Sets the access control list (ACL) permissions for an existing object.
*/


var PutObjectACL = function(session) {
    /*
        Create a new instance of the PutObjectACL Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/PutObjectACL"
    PutObjectACL.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new PutObjectACLResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new PutObjectACLInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the PutObjectACL
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var PutObjectACLInputSet = function() {
    PutObjectACLInputSet.super_.call(this);
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
        Set the value of the AccessControlList input for this Choreo. ((optional, xml) Custom Access Control List xml for advanced configuration. See description for an example, plus Amazon documentation.)
        */
        this.set_AccessControlList = function(value) {
            this.setInput("AccessControlList", value);
        }

        /*
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that contains the object that you want to create or update a policy for.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((conditional, string) Most common ACL usage, required unless creating a custom policy. Values: private, public-read, public-read-write, authenticated-read, bucket-owner-read, or bucket-owner-full-control.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file or object that you want to put access controls on in S3. Ex.: file.txt or folder/file.txt.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the OwnerEmailAddress input for this Choreo. ((optional, string) The email address of the owner who is granting permission. Required if creating your own custom ACL policy.)
        */
        this.set_OwnerEmailAddress = function(value) {
            this.setInput("OwnerEmailAddress", value);
        }

        /*
        Set the value of the OwnerId input for this Choreo. ((optional, string) The canonical user id of the owner who is granting permission. Required if creating your own custom ACL policy.)
        */
        this.set_OwnerId = function(value) {
            this.setInput("OwnerId", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the PutObjectACL Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var PutObjectACLResultSet = function(resultStream) {
    PutObjectACLResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. (Stores the response from Amazon. Note that for a successful ACL creation, no content is returned and this output variable is empty.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(PutObjectACL, choreography.Choreography);
util.inherits(PutObjectACLInputSet, choreography.InputSet);
util.inherits(PutObjectACLResultSet, choreography.ResultSet);
exports.PutObjectACL = PutObjectACL;


/*
    ZipBucket
    Creates a zip file containing all objects within the specified bucket and returns a download link for the new compressed file.
*/


var ZipBucket = function(session) {
    /*
        Create a new instance of the ZipBucket Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/ZipBucket"
    ZipBucket.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ZipBucketResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ZipBucketInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ZipBucket
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ZipBucketInputSet = function() {
    ZipBucketInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that contains the list of objects that you want to zip.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((conditional, string) This sets the permissions for the newly created zip file. Valid values are: private, public-read, public-read-write, authenticated-read, bucket-owner-read, or bucket-owner-full-control.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the Delimiter input for this Choreo. ((optional, string) A delimiter is a character you use to group keys. All keys that contain the delimiter are grouped under a single result element, Common Prefixes. For more information see Amazon documentation.)
        */
        this.set_Delimiter = function(value) {
            this.setInput("Delimiter", value);
        }

        /*
        Set the value of the Prefix input for this Choreo. ((optional, string) Limits the response to keys that begin with the specified prefix - useful for separating a bucket into different groupings of keys. Ex: specify 'test' to get a list of objects starting with 'test'.)
        */
        this.set_Prefix = function(value) {
            this.setInput("Prefix", value);
        }

        /*
        Set the value of the ZipFileLocation input for this Choreo. ((optional, string) The name of the bucket to put the new zip file in. When not specified, the zip file will be put in the bucket that contains the files being zipped.)
        */
        this.set_ZipFileLocation = function(value) {
            this.setInput("ZipFileLocation", value);
        }

        /*
        Set the value of the ZipFileName input for this Choreo. ((optional, string) The name of the zip file that will be created. If not specified, the original bucket name will be used with .zip extension.)
        */
        this.set_ZipFileName = function(value) {
            this.setInput("ZipFileName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ZipBucket Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ZipBucketResultSet = function(resultStream) {
    ZipBucketResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "URL" output from this Choreo execution. ((string) The URL location of the new zip file.)
        */
        this.get_URL = function() {
            return this.getResult("URL");
        }
}

util.inherits(ZipBucket, choreography.Choreography);
util.inherits(ZipBucketInputSet, choreography.InputSet);
util.inherits(ZipBucketResultSet, choreography.ResultSet);
exports.ZipBucket = ZipBucket;


/*
    ZipObject
    Creates a zipped version of the specified S3 file and returns a download link for the new compressed file.
*/


var ZipObject = function(session) {
    /*
        Create a new instance of the ZipObject Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Amazon/S3/ZipObject"
    ZipObject.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ZipObjectResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ZipObjectInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ZipObject
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ZipObjectInputSet = function() {
    ZipObjectInputSet.super_.call(this);
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
        Set the value of the BucketName input for this Choreo. ((required, string) The name of the bucket that contains the object to retrieve and zip.)
        */
        this.set_BucketName = function(value) {
            this.setInput("BucketName", value);
        }

        /*
        Set the value of the CannedACL input for this Choreo. ((conditional, string) This sets the permissions for the newly created zip file. Valid values are: private, public-read, public-read-write, authenticated-read, bucket-owner-read, or bucket-owner-full-control.)
        */
        this.set_CannedACL = function(value) {
            this.setInput("CannedACL", value);
        }

        /*
        Set the value of the FileName input for this Choreo. ((required, string) The name of the file to retrieve and zip.)
        */
        this.set_FileName = function(value) {
            this.setInput("FileName", value);
        }

        /*
        Set the value of the ZipFileLocation input for this Choreo. ((optional, string) The name of the bucket to put the new zip file in. When not specified, the zip file will be put in the bucket where the original uncompressed file is located.)
        */
        this.set_ZipFileLocation = function(value) {
            this.setInput("ZipFileLocation", value);
        }

        /*
        Set the value of the ZipFileName input for this Choreo. ((optional, string) The name of the zip file that will be created. If not specified, the original file name will be used with .zip extension.)
        */
        this.set_ZipFileName = function(value) {
            this.setInput("ZipFileName", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ZipObject Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ZipObjectResultSet = function(resultStream) {
    ZipObjectResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "URL" output from this Choreo execution. ((string) The URL location of the new zip file.)
        */
        this.get_URL = function() {
            return this.getResult("URL");
        }
}

util.inherits(ZipObject, choreography.Choreography);
util.inherits(ZipObjectInputSet, choreography.InputSet);
util.inherits(ZipObjectResultSet, choreography.ResultSet);
exports.ZipObject = ZipObject;

