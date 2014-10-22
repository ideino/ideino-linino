
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    ListSearchResults
    Returns a list of search results that match the specified query parameters.
*/


var ListSearchResults = function(session) {
    /*
        Create a new instance of the ListSearchResults Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/YouTube/Search/ListSearchResults"
    ListSearchResults.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ListSearchResultsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ListSearchResultsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the ListSearchResults
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ListSearchResultsInputSet = function() {
    ListSearchResultsInputSet.super_.call(this);
        /*
        Set the value of the APIKey input for this Choreo. ((optional, string) The API Key provided by Google for simple API access when you do not need to access user data.)
        */
        this.set_APIKey = function(value) {
            this.setInput("APIKey", value);
        }

        /*
        Set the value of the AccessToken input for this Choreo. ((optional, string) A valid access token retrieved during the OAuth process. This is required for OAuth authentication unless you provide the ClientID, ClientSecret, and RefreshToken to generate a new access token.)
        */
        this.set_AccessToken = function(value) {
            this.setInput("AccessToken", value);
        }

        /*
        Set the value of the ChannelID input for this Choreo. ((optional, string) Indicates that the response should only contain resources created by this channel.)
        */
        this.set_ChannelID = function(value) {
            this.setInput("ChannelID", value);
        }

        /*
        Set the value of the ChannelType input for this Choreo. ((optional, string) Restricts a search to a particular type of channel. Valid values are: "any" (returns all channels) and "show" (only retrieves shows).)
        */
        this.set_ChannelType = function(value) {
            this.setInput("ChannelType", value);
        }

        /*
        Set the value of the ClientID input for this Choreo. ((optional, string) The Client ID provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientID = function(value) {
            this.setInput("ClientID", value);
        }

        /*
        Set the value of the ClientSecret input for this Choreo. ((optional, string) The Client Secret provided by Google. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_ClientSecret = function(value) {
            this.setInput("ClientSecret", value);
        }

        /*
        Set the value of the Fields input for this Choreo. ((optional, string) Allows you to specify a subset of fields to include in the response using an xpath-like syntax (i.e. items/snippet/title).)
        */
        this.set_Fields = function(value) {
            this.setInput("Fields", value);
        }

        /*
        Set the value of the MaxResults input for this Choreo. ((optional, integer) The maximum number of results to return.)
        */
        this.set_MaxResults = function(value) {
            this.setInput("MaxResults", value);
        }

        /*
        Set the value of the Order input for this Choreo. ((optional, string) Indicates how the results are sorted. Valid values are: date, rating, relevance, and viewCount.)
        */
        this.set_Order = function(value) {
            this.setInput("Order", value);
        }

        /*
        Set the value of the PageToken input for this Choreo. ((optional, string) The "nextPageToken" found in the response which is used to page through results.)
        */
        this.set_PageToken = function(value) {
            this.setInput("PageToken", value);
        }

        /*
        Set the value of the Part input for this Choreo. ((optional, string) Specifies a comma-separated list of one or more search resource properties that the API response will include. Part names that you can pass are 'id' and 'snippet' (the default).)
        */
        this.set_Part = function(value) {
            this.setInput("Part", value);
        }

        /*
        Set the value of the PublishedAfter input for this Choreo. ((optional, date) Returns only results created after the specified time (formatted as a RFC 3339 date-time i.e. 1970-01-01T00:00:00Z).)
        */
        this.set_PublishedAfter = function(value) {
            this.setInput("PublishedAfter", value);
        }

        /*
        Set the value of the PublishedBefore input for this Choreo. ((optional, date) Returns only results created before the specified time (formatted as a RFC 3339 date-time i.e. 1970-01-01T00:00:00Z).)
        */
        this.set_PublishedBefore = function(value) {
            this.setInput("PublishedBefore", value);
        }

        /*
        Set the value of the Query input for this Choreo. ((conditional, string) A query string for searching videos.)
        */
        this.set_Query = function(value) {
            this.setInput("Query", value);
        }

        /*
        Set the value of the RefreshToken input for this Choreo. ((optional, string) An OAuth refresh token used to generate a new access token when the original token is expired. Required for OAuth authentication unless providing a valid AccessToken.)
        */
        this.set_RefreshToken = function(value) {
            this.setInput("RefreshToken", value);
        }

        /*
        Set the value of the RegionCode input for this Choreo. ((optional, string) Returns results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.)
        */
        this.set_RegionCode = function(value) {
            this.setInput("RegionCode", value);
        }

        /*
        Set the value of the RelatedToVideoID input for this Choreo. ((optional, string) Retrieves a list of videos that are related to this video id. When using this parameter, the Type parameter must be set to video.)
        */
        this.set_RelatedToVideoID = function(value) {
            this.setInput("RelatedToVideoID", value);
        }

        /*
        Set the value of the TopicID input for this Choreo. ((optional, string) Returns only results associated with the specified topic.)
        */
        this.set_TopicID = function(value) {
            this.setInput("TopicID", value);
        }

        /*
        Set the value of the Type input for this Choreo. ((optional, string) Restricts a search query to only retrieve a particular type of resource. The default value is: video,channel,playlist.)
        */
        this.set_Type = function(value) {
            this.setInput("Type", value);
        }

        /*
        Set the value of the VideoCaption input for this Choreo. ((optional, string) Returns filtered results based on whether videos have captions. Valid values are: any (the default), closedCaption (only returns videos with captions), or none (only returns videos without captions).)
        */
        this.set_VideoCaption = function(value) {
            this.setInput("VideoCaption", value);
        }

        /*
        Set the value of the VideoCategoryID input for this Choreo. ((optional, string) Filters video search results based on their category.)
        */
        this.set_VideoCategoryID = function(value) {
            this.setInput("VideoCategoryID", value);
        }

        /*
        Set the value of the VideoDefinition input for this Choreo. ((optional, string) Filters video results based high or standard definition. Valid values are: any, high, or standard.)
        */
        this.set_VideoDefinition = function(value) {
            this.setInput("VideoDefinition", value);
        }

        /*
        Set the value of the VideoDimension input for this Choreo. ((optional, string) Restrict a search to only retrieve 2D or 3D videos. Valid values are: 2d, 3d, or any.)
        */
        this.set_VideoDimension = function(value) {
            this.setInput("VideoDimension", value);
        }

        /*
        Set the value of the VideoDuration input for this Choreo. ((optional, string) Filters search results based on the video duration. Valid values are: any, long, medium, and short.)
        */
        this.set_VideoDuration = function(value) {
            this.setInput("VideoDuration", value);
        }

        /*
        Set the value of the VideoEmbeddable input for this Choreo. ((optional, string) Filters search results to include only videos that can be embedded into a webpage. Valid values are: any (the default) or true (which will enable this filter).)
        */
        this.set_VideoEmbeddable = function(value) {
            this.setInput("VideoEmbeddable", value);
        }

        /*
        Set the value of the VideoLicense input for this Choreo. ((optional, string) Filters search results to only include videos with a particular license. Valid values are: any, creativeCommon, and youtube.)
        */
        this.set_VideoLicense = function(value) {
            this.setInput("VideoLicense", value);
        }

        /*
        Set the value of the VideoSyndicated input for this Choreo. ((optional, string) Filters search results for videos that can be played outside of youtube.com. Valid values are: any (the default) or true (which will enable this filter).)
        */
        this.set_VideoSyndicated = function(value) {
            this.setInput("VideoSyndicated", value);
        }

        /*
        Set the value of the VideoType input for this Choreo. ((optional, string) Filters search results to a particular type of videos. Valid values are: any, episode, and movie.)
        */
        this.set_VideoType = function(value) {
            this.setInput("VideoType", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the ListSearchResults Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ListSearchResultsResultSet = function(resultStream) {
    ListSearchResultsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "NewAccessToken" output from this Choreo execution. ((string) Contains a new AccessToken when the RefreshToken is provided.)
        */
        this.get_NewAccessToken = function() {
            return this.getResult("NewAccessToken");
        }
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((json) The response from YouTube.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(ListSearchResults, choreography.Choreography);
util.inherits(ListSearchResultsInputSet, choreography.InputSet);
util.inherits(ListSearchResultsResultSet, choreography.ResultSet);
exports.ListSearchResults = ListSearchResults;

