/**
*   Temboosession.js: How we interact with the Temboo server.
*/

var https = require("https");
var querystring = require("querystring");
var texception = require("./exception");

exports.TembooSession = function(accountName, appKeyName, appKeyValue) {
    var accountName = accountName;
    var appKeyName = appKeyName;
    var appKeyValue = appKeyValue;
    var clientIdentifer = "NodeJSSDK_1.77";
    var basePath = "/arcturus-web/api-1.0";
    var portNum = 443;
    var reqHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "x-temboo-domain": [accountName, "master"].join("/")
    };

    var getHost = function() {
        return [accountName, "temboolive.com"].join(".");
    }

    var getReqPath = function(path, params) {
        var reqPath = path;
        if (params) {
            reqPath = reqPath + "?" + querystring.stringify(params);
        }
        return reqPath;
    }

    var respAggregator = function(response, callback, errorCallback) {
    	response.setEncoding('utf8');
        var currCode = response.statusCode;
        var respBody = "";
        response.on("data", function(chunk) {
            respBody += chunk;
        });
        response.on("end", function() {
            // Response as expected.
            if (currCode >= 200 && currCode < 300) {
                callback(respBody);
            // Bad response codes!
            } else {
                texception.determineException(respBody, currCode, 
                                              errorCallback);
            }
        });
    }

    var makeRequest = function(reqMethod, path, params, body, callback, 
                               errorCallback) {
        currCode = null;
        currResp = null;
        // Add client identifier to paramters.
        params["source_id"] = clientIdentifer;

        var options = {
            method: reqMethod,
            hostname: getHost(),
            port: portNum,
            path: getReqPath(path, params),
            headers: reqHeaders,
            auth: [appKeyName, appKeyValue].join(":")
        };
        var request = https.request(options, function(response) {
            respAggregator(response, callback, errorCallback);
        });

        request.on("error", function(e) {
            e.message += " Make sure your Temboo account name is spelled correctly."
            throw new Error(e.message);
        });
        
        if (body) {
            request.write(body);
        }
        request.end();
    }

    this.getIdentifier = function() {
         return clientIdentifer;
    }

    this.getBasePath = function() {
        return basePath;
    }

    this.getRequest = function(path, params, callback) {
        return makeRequest("GET", path, params, null, callback);
    }
        
    this.postRequest = function(path, params, body, callback, errorCallback) {
        makeRequest("POST", path, params, body, callback, errorCallback);
    }
}

