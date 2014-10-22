
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    CreateProduct
    Creates a new product batch.
*/


var CreateProduct = function(session) {
    /*
        Create a new instance of the CreateProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Products/CreateProduct"
    CreateProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new CreateProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new CreateProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the CreateProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var CreateProductInputSet = function() {
    CreateProductInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomProduct input for this Choreo. ((optional, json) Optional custom configuration for creating your product in JSON. If you use this field the other optional parameters will be ignored. See Choreo description and Xively documentation for details.)
        */
        this.set_CustomProduct = function(value) {
            this.setInput("CustomProduct", value);
        }

        /*
        Set the value of the Datastreams input for this Choreo. ((optional, json) Default device datastream JSON array. Every newly created device in this product will have this default datastream. Ex: [{"id":"channel1"},{"id":"demo"}])
        */
        this.set_Datastreams = function(value) {
            this.setInput("Datastreams", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) Description of the product.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((conditional, string) Name of the product. Required unless using the CustomProduct JSON input.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Private input for this Choreo. ((optional, string) Default device feed privacy settings. Valid values: "true", "false" (default).)
        */
        this.set_Private = function(value) {
            this.setInput("Private", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the CreateProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var CreateProductResultSet = function(resultStream) {
    CreateProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ProductID" output from this Choreo execution. ((string) The ProductID obtained from the ProductLocation returned by this Choreo.)
        */
        this.get_ProductID = function() {
            return this.getResult("ProductID");
        }
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful product creation, the code should be 201.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
        /*
        Retrieve the value for the "ProductLocation" output from this Choreo execution. ((string) The URL of the newly created product.)
        */
        this.get_ProductLocation = function() {
            return this.getResult("ProductLocation");
        }
}

util.inherits(CreateProduct, choreography.Choreography);
util.inherits(CreateProductInputSet, choreography.InputSet);
util.inherits(CreateProductResultSet, choreography.ResultSet);
exports.CreateProduct = CreateProduct;


/*
    DeleteProduct
    Deletes a product batch. This will also delete all devices and feeds associated with the specified product batch.
*/


var DeleteProduct = function(session) {
    /*
        Create a new instance of the DeleteProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Products/DeleteProduct"
    DeleteProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new DeleteProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new DeleteProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the DeleteProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var DeleteProductInputSet = function() {
    DeleteProductInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The ID of the product you are trying to delete.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the DeleteProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var DeleteProductResultSet = function(resultStream) {
    DeleteProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful product deletion, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(DeleteProduct, choreography.Choreography);
util.inherits(DeleteProductInputSet, choreography.InputSet);
util.inherits(DeleteProductResultSet, choreography.ResultSet);
exports.DeleteProduct = DeleteProduct;


/*
    ListAllProducts
    Returns a JSON representation of all products associated with the specified APIKey.
*/


var ListAllProducts = function(session) {
    /*
        Create a new instance of the ListAllProducts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Products/ListAllProducts"
    ListAllProducts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListAllProductsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListAllProductsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListAllProducts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListAllProductsInputSet = function() {
    ListAllProductsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListAllProducts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListAllProductsResultSet = function(resultStream) {
    ListAllProductsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListAllProducts, choreography.Choreography);
util.inherits(ListAllProductsInputSet, choreography.InputSet);
util.inherits(ListAllProductsResultSet, choreography.ResultSet);
exports.ListAllProducts = ListAllProducts;


/*
    ReadProduct
    Returns a JSON representation of a product. 
*/


var ReadProduct = function(session) {
    /*
        Create a new instance of the ReadProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Products/ReadProduct"
    ReadProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ReadProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ReadProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ReadProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ReadProductInputSet = function() {
    ReadProductInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The ID of the product you are trying to read information on.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ReadProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ReadProductResultSet = function(resultStream) {
    ReadProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from Xively.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ReadProduct, choreography.Choreography);
util.inherits(ReadProductInputSet, choreography.InputSet);
util.inherits(ReadProductResultSet, choreography.ResultSet);
exports.ReadProduct = ReadProduct;


/*
    UpdateProduct
    Updates an existing product batch.
*/


var UpdateProduct = function(session) {
    /*
        Create a new instance of the UpdateProduct Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/Xively/Products/UpdateProduct"
    UpdateProduct.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new UpdateProductResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new UpdateProductInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the UpdateProduct
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var UpdateProductInputSet = function() {
    UpdateProductInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((required, string) The API Key provided by Xively.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the CustomProduct input for this Choreo. ((optional, json) Optional custom configuration for creating your product in JSON. If you use this field the other optional parameters will be ignored. See Choreo description and Xively documentation for details.)
        */
        this.set_CustomProduct = function(value) {
            this.setInput("CustomProduct", value);
        }

        /*
        Set the value of the Datastreams input for this Choreo. ((optional, json) Default device datastream JSON array. Every newly created device in this product will have this default datastream. Ex: [{"id":"channel1"},{"id":"demo"}].)
        */
        this.set_Datastreams = function(value) {
            this.setInput("Datastreams", value);
        }

        /*
        Set the value of the Description input for this Choreo. ((optional, string) Description of the product.)
        */
        this.set_Description = function(value) {
            this.setInput("Description", value);
        }

        /*
        Set the value of the Name input for this Choreo. ((optional, string) Name of the product.)
        */
        this.set_Name = function(value) {
            this.setInput("Name", value);
        }

        /*
        Set the value of the Private input for this Choreo. ((optional, string) Default device feed privacy settings. Valid values: "true", "false" (default). Note - leaving this blank will automatically change a private device feed to a public device feed.)
        */
        this.set_Private = function(value) {
            this.setInput("Private", value);
        }

        /*
        Set the value of the ProductID input for this Choreo. ((required, string) The ID of the product you are trying to update.)
        */
        this.set_ProductID = function(value) {
            this.setInput("ProductID", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the UpdateProduct Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var UpdateProductResultSet = function(resultStream) {
    UpdateProductResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "ResponseStatusCode" output from this Choreo execution. ((integer) The response status code returned from Xively. For a successful product update, the code should be 200.)
        */
        this.get_ResponseStatusCode = function() {
            return this.getResult("ResponseStatusCode");
        }
}

util.inherits(UpdateProduct, choreography.Choreography);
util.inherits(UpdateProductInputSet, choreography.InputSet);
util.inherits(UpdateProductResultSet, choreography.ResultSet);
exports.UpdateProduct = UpdateProduct;

