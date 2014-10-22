exports.ChoreographyExecution = function(parentSession, execId) {
    var session = parentSession;
    var id = execId;
    var status = null;
    var completionStatus = null;
    var resultSet = null;

    var getPath = function() {
        return [session.getBasePath(), "choreo-executions", id].join("/");
    }

    return {
        getStatus: function() {
            if (completionStatus) {
                return completionStatus;
            }
            var response = JSON.parse(session.getRequest(getPath()));
            var currentStatus = response["execution"]["status"];
            status = currentStatus;

            if (currentStatus != "RUNNING") {
                var resultResponse = session.getRequest(getPath(), 
                                                    {"view": "outputs"});
                completionStatus = currentStatus;
                resultSet = new ResultSet(resultResponse);
            }
            return status;
        },
        getResults: function() {
            if (!resultSet) {
                getStatus();
            }
            return resultSet;
        }
    }
}