var determineException = function(errorStream, errorCode, errorCallback) {
    try {
        var errorMessage = JSON.parse(errorStream).error.message;
        // console.log(errorHash.error.message);
        if (errorCode === 401) {
            errorCallback(new TembooCredentialError(errorMessage));
        } else if (errorCode === 404) {
            errorCallback(new TembooCredentialError(errorMessage));
        } else {
            errorCallback(new TembooException(errorHash.message));
        };
    } catch(SyntaxError) {
        errorCallback(new NonTembooException(errorStream));
    }
}

var TembooError = function(stream) {
    this.type = "TembooError";
    this.message = stream;
}

var TembooCredentialError = function(stream) {
    // console.log(stream);
    this.type = "TembooCredentialError";
    this.message = stream;
}

var TembooObjectNotAccessibleError = function(stream) {
    this.type = "TembooObjectNotAccessibleError";
    this.message = stream;
}

var NonTembooException = function(stream) {
    this.type = "NonTembooException";
    this.message = stream;
}

exports.determineException = determineException;