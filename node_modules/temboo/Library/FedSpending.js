
var util = require("util");
var choreography = require("temboo/core/choreography");


/*
    Assistance
    Allows access to the information in the Federal Assisatance Award Data System (FAADS) database, which reports all financial assistance made by federal agencies.
*/


var Assistance = function(session) {
    /*
        Create a new instance of the Assistance Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedSpending/Assistance"
    Assistance.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new AssistanceResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new AssistanceInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Assistance
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var AssistanceInputSet = function() {
    AssistanceInputSet.super_.call(this);
        /*
        Set the value of the AgencyCode input for this Choreo. ((conditional, string) The 4-character code for a specific governmental agency providing assistance.)
        */
        this.set_AgencyCode = function(value) {
            this.setInput("AgencyCode", value);
        }

        /*
        Set the value of the AssistanceType input for this Choreo. ((conditional, string) The type of assistance provided. Valid values are: d = Direct Payments (specified and unrestricted), g = Grants and Cooperative Agreements, i = Insurance, l = Loans (direct and guaranteed), o = Other.)
        */
        this.set_AssistanceType = function(value) {
            this.setInput("AssistanceType", value);
        }

        /*
        Set the value of the CFDAProgram input for this Choreo. ((conditional, string) An ID for the governmental program.)
        */
        this.set_CFDAProgram = function(value) {
            this.setInput("CFDAProgram", value);
        }

        /*
        Set the value of the Detail input for this Choreo. ((optional, string) Controls the level of detail of the output. Acceptable values: -1 (summary), 0 (low), 1 (medium), 2 (high), and 3 (extensive). Defaults to -1. See docs for more information.)
        */
        this.set_Detail = function(value) {
            this.setInput("Detail", value);
        }

        /*
        Set the value of the FederalID input for this Choreo. ((conditional, string) A Federal ID for the award.)
        */
        this.set_FederalID = function(value) {
            this.setInput("FederalID", value);
        }

        /*
        Set the value of the FirstYearRange input for this Choreo. ((conditional, integer) Specifies the first year in a range of years from 2000-2006; if used, must be used with LastYearRange and without FiscalYear.)
        */
        this.set_FirstYearRange = function(value) {
            this.setInput("FirstYearRange", value);
        }

        /*
        Set the value of the FiscalYear input for this Choreo. ((conditional, integer) Specifies a single year from 2000-2006; defaults to all years.)
        */
        this.set_FiscalYear = function(value) {
            this.setInput("FiscalYear", value);
        }

        /*
        Set the value of the LastYearRange input for this Choreo. ((conditional, integer) Specifies the last year in a range of years from 2000-2006; if used, must be used with FirstYearRange and without FiscalYear.)
        */
        this.set_LastYearRange = function(value) {
            this.setInput("LastYearRange", value);
        }

        /*
        Set the value of the MajAgency input for this Choreo. ((conditional, string) The 2-character code for a major governmental agency providing assistance.)
        */
        this.set_MajAgency = function(value) {
            this.setInput("MajAgency", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) Allows you to set the maximum number of records retrieved. Defaults to 100.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the PrincipalPlaceCC input for this Choreo. ((conditional, string) The city or county of the place of performance.)
        */
        this.set_PrincipalPlaceCC = function(value) {
            this.setInput("PrincipalPlaceCC", value);
        }

        /*
        Set the value of the PrincipalPlaceStateCode input for this Choreo. ((conditional, string) The FIPS state code for the state of the place of performance.)
        */
        this.set_PrincipalPlaceStateCode = function(value) {
            this.setInput("PrincipalPlaceStateCode", value);
        }

        /*
        Set the value of the RecipientCityName input for this Choreo. ((conditional, string) The city in the address of a recipient.)
        */
        this.set_RecipientCityName = function(value) {
            this.setInput("RecipientCityName", value);
        }

        /*
        Set the value of the RecipientCountyName input for this Choreo. ((conditional, string) The county in which a recipient is located.)
        */
        this.set_RecipientCountyName = function(value) {
            this.setInput("RecipientCountyName", value);
        }

        /*
        Set the value of the RecipientDistrict input for this Choreo. ((conditional, string) The Congressional District in which the recipient is located, formatted with four characters.)
        */
        this.set_RecipientDistrict = function(value) {
            this.setInput("RecipientDistrict", value);
        }

        /*
        Set the value of the RecipientName input for this Choreo. ((conditional, string) The name of a recipient of assistance.)
        */
        this.set_RecipientName = function(value) {
            this.setInput("RecipientName", value);
        }

        /*
        Set the value of the RecipientStateCode input for this Choreo. ((conditional, string) The FIPS state code for the state in the address of a recipient.)
        */
        this.set_RecipientStateCode = function(value) {
            this.setInput("RecipientStateCode", value);
        }

        /*
        Set the value of the RecipientType input for this Choreo. ((conditional, string) The type of recipient. Valid values are: f = For Profits, g = Government,h = Higher Education, i = Individuals,n = Nonprofits, o = Other.)
        */
        this.set_RecipientType = function(value) {
            this.setInput("RecipientType", value);
        }

        /*
        Set the value of the RecipientZip input for this Choreo. ((conditional, integer) The ZIP code in the address of a recipient.)
        */
        this.set_RecipientZip = function(value) {
            this.setInput("RecipientZip", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Determines how records are sorted. Valid values: r (contractor/recipient name), f (dollars of awards),g (major contracting agency), p (CFDA Program), d (date of award). Defaults to f.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the TextSearch input for this Choreo. ((conditional, string) A free text search on a description of the project.)
        */
        this.set_TextSearch = function(value) {
            this.setInput("TextSearch", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Assistance Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var AssistanceResultSet = function(resultStream) {
    AssistanceResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedSpending.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Assistance, choreography.Choreography);
util.inherits(AssistanceInputSet, choreography.InputSet);
util.inherits(AssistanceResultSet, choreography.ResultSet);
exports.Assistance = Assistance;


/*
    Contracts
    Allows access to the information in the Federal Procurement Data System (FPDS) database, which reports all federal contracts awarded. 
*/


var Contracts = function(session) {
    /*
        Create a new instance of the Contracts Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedSpending/Contracts"
    Contracts.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new ContractsResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new ContractsInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Contracts
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var ContractsInputSet = function() {
    ContractsInputSet.super_.call(this);
        /*
        Set the value of the City input for this Choreo. ((conditional, string) The city within a contractor's address.)
        */
        this.set_City = function(value) {
            this.setInput("City", value);
        }

        /*
        Set the value of the CompanyName input for this Choreo. ((conditional, string) The name of a a contractor or contractor parent company.)
        */
        this.set_CompanyName = function(value) {
            this.setInput("CompanyName", value);
        }

        /*
        Set the value of the Completion input for this Choreo. ((conditional, string) The competition status of a contract. Valid values: c=Full competition, o=Full competition, one bid, p=Competition, exclusion of sources, n=Not complete, a=Not available, f=Follow-up, u=Unknown.)
        */
        this.set_Completion = function(value) {
            this.setInput("Completion", value);
        }

        /*
        Set the value of the Detail input for this Choreo. ((optional, string) Controls the level of detail of the output. Acceptable values: -1 (summary), 0 (low), 1 (medium), 2 (high), and 3 (extensive). Defaults to -1. See docs for more information.)
        */
        this.set_Detail = function(value) {
            this.setInput("Detail", value);
        }

        /*
        Set the value of the FirstYearRange input for this Choreo. ((conditional, integer) Specifies the first year in a range of years; if used, must be used with LastYearRange and without FiscalYear.)
        */
        this.set_FirstYearRange = function(value) {
            this.setInput("FirstYearRange", value);
        }

        /*
        Set the value of the FiscalYear input for this Choreo. ((conditional, integer) Specifies a single year; defaults to all years.)
        */
        this.set_FiscalYear = function(value) {
            this.setInput("FiscalYear", value);
        }

        /*
        Set the value of the LastYearRange input for this Choreo. ((conditional, integer) Specifies the last year in a range of years; if used, must be used with FirstYearRange and without FiscalYear.)
        */
        this.set_LastYearRange = function(value) {
            this.setInput("LastYearRange", value);
        }

        /*
        Set the value of the MajAgency input for this Choreo. ((conditional, string) The 2-character code for a major governmental agency issuing contracts.)
        */
        this.set_MajAgency = function(value) {
            this.setInput("MajAgency", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) Allows you to set the maximum number of records retrieved. Defaults to 100.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the ModAgency input for this Choreo. ((conditional, string) The 4-digit code for a specific governmental agency issuing contracts.)
        */
        this.set_ModAgency = function(value) {
            this.setInput("ModAgency", value);
        }

        /*
        Set the value of the PIID input for this Choreo. ((conditional, integer) A Federal ID number for the contract.)
        */
        this.set_PIID = function(value) {
            this.setInput("PIID", value);
        }

        /*
        Set the value of the PSCCategory input for this Choreo. ((conditional, string) The 2-character code for a major product or service category.)
        */
        this.set_PSCCategory = function(value) {
            this.setInput("PSCCategory", value);
        }

        /*
        Set the value of the PSC input for this Choreo. ((conditional, string) The 4-character code for a product or service.)
        */
        this.set_PSC = function(value) {
            this.setInput("PSC", value);
        }

        /*
        Set the value of the PopCountryCode input for this Choreo. ((conditional, string) The two-letter country code for the place of performance country.)
        */
        this.set_PopCountryCode = function(value) {
            this.setInput("PopCountryCode", value);
        }

        /*
        Set the value of the PopDistrict input for this Choreo. ((conditional, string) The Congressional District of the place of performance.)
        */
        this.set_PopDistrict = function(value) {
            this.setInput("PopDistrict", value);
        }

        /*
        Set the value of the PopZipCode input for this Choreo. ((conditional, integer) The ZIP code of the place of performance.)
        */
        this.set_PopZipCode = function(value) {
            this.setInput("PopZipCode", value);
        }

        /*
        Set the value of the SortBy input for this Choreo. ((optional, string) Determines how records are sorted. Valid values: r (contractor/recipient name), f (dollars of awards),g (major contracting agency),p (Product or Service Category),d (date of award). Defaults to f.)
        */
        this.set_SortBy = function(value) {
            this.setInput("SortBy", value);
        }

        /*
        Set the value of the StateCode input for this Choreo. ((conditional, string) The state abbreviation of the state of the place of performance.)
        */
        this.set_StateCode = function(value) {
            this.setInput("StateCode", value);
        }

        /*
        Set the value of the State input for this Choreo. ((conditional, string) The state abbreviation within a contractor's address.)
        */
        this.set_State = function(value) {
            this.setInput("State", value);
        }

        /*
        Set the value of the TextSearch input for this Choreo. ((conditional, string) Free text search within the text that describes what the contract is for.)
        */
        this.set_TextSearch = function(value) {
            this.setInput("TextSearch", value);
        }

        /*
        Set the value of the VendorCountryCode input for this Choreo. ((conditional, string) The two-letter country code for the country in a contractor's address.)
        */
        this.set_VendorCountryCode = function(value) {
            this.setInput("VendorCountryCode", value);
        }

        /*
        Set the value of the VendorDistrict input for this Choreo. ((conditional, string) The 4-character Congressional District within which a contractor is located.)
        */
        this.set_VendorDistrict = function(value) {
            this.setInput("VendorDistrict", value);
        }

        /*
        Set the value of the ZipCode input for this Choreo. ((conditional, integer) The ZIP code within a contractor's address.)
        */
        this.set_ZipCode = function(value) {
            this.setInput("ZipCode", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Contracts Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var ContractsResultSet = function(resultStream) {
    ContractsResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedSpending.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Contracts, choreography.Choreography);
util.inherits(ContractsInputSet, choreography.InputSet);
util.inherits(ContractsResultSet, choreography.ResultSet);
exports.Contracts = Contracts;


/*
    Recovery
    Allows access to the information in the Recovery Act Recipient Reports database.
*/


var Recovery = function(session) {
    /*
        Create a new instance of the Recovery Choreo. A TembooSession object, containing a valid
        set of Temboo credentials, must be supplied.
	*/
    var location = "/Library/FedSpending/Recovery"
    Recovery.super_.call(this, session, location);

    /*
    Define a callback that will be used to appropriately format the results of this Choreo.
    */
    var newResultSet = function(resultStream) {
        return new RecoveryResultSet(resultStream);
    }

	/*
	Obtain a new InputSet object, used to specify the input values for an execution of this Choreo.
	*/
    this.newInputSet = function() {
        return new RecoveryInputSet();
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
An InputSet with methods appropriate for specifying the inputs to the Recovery
Choreo. The InputSet object is used to specify input parameters when executing this Choreo.
*/

var RecoveryInputSet = function() {
    RecoveryInputSet.super_.call(this);
        /*
        Set the value of the Activity input for this Choreo. ((conditional, string) Whether or not to search by activity. (Will provide a select list if "y"). y = yes, n = no. Defaults to n if not set.)
        */
        this.set_Activity = function(value) {
            this.setInput("Activity", value);
        }

        /*
        Set the value of the AwardAmount input for this Choreo. ((conditional, string) Grants: total Federal dollars. Loans: face value of loan obligated by the Federal Agency. Contracts: total amount obligated by Federal Agency. Vendors: payment amount. Recipients:  amount of award.)
        */
        this.set_AwardAmount = function(value) {
            this.setInput("AwardAmount", value);
        }

        /*
        Set the value of the AwardNumber input for this Choreo. ((conditional, integer) Identifying number assigned by the awarding Federal Agency. e.g. federal grant number, federal contract number or federal loan number. For grants and loans, this is assigned by the prime recipient.)
        */
        this.set_AwardNumber = function(value) {
            this.setInput("AwardNumber", value);
        }

        /*
        Set the value of the AwardType input for this Choreo. ((conditional, string) Acceptable values: G = Grants only,L = Loans only, C = Contracts only.)
        */
        this.set_AwardType = function(value) {
            this.setInput("AwardType", value);
        }

        /*
        Set the value of the AwardingAgency input for this Choreo. ((conditional, string) The 4-digit code for a specific governmental awarding agency that awarded and is administering the award on behalf of the funding agency.)
        */
        this.set_AwardingAgency = function(value) {
            this.setInput("AwardingAgency", value);
        }

        /*
        Set the value of the CFDA input for this Choreo. ((conditional, string) The Catalog of Federal Domestic Number is the number associated with the published description of a Federal Assistance program in the CFDA.)
        */
        this.set_CFDA = function(value) {
            this.setInput("CFDA", value);
        }

        /*
        Set the value of the Detail input for this Choreo. ((optional, string) Controls the level of detail of the output. Acceptable values: -1 (summary), 0 (low), 1 (medium), 2 (high), and 3 (extensive). Defaults to -1. See docs for more information.)
        */
        this.set_Detail = function(value) {
            this.setInput("Detail", value);
        }

        /*
        Set the value of the EntityDun input for this Choreo. ((conditional, string) The prime recipient for the award's Dun & Bradstreet number (no vendor information).)
        */
        this.set_EntityDun = function(value) {
            this.setInput("EntityDun", value);
        }

        /*
        Set the value of the FirstYearRange input for this Choreo. ((conditional, integer) Specifies the first year in a range of years from 2000-2006; if used, must be used with LastYearRange and without FiscalYear.)
        */
        this.set_FirstYearRange = function(value) {
            this.setInput("FirstYearRange", value);
        }

        /*
        Set the value of the FiscalYear input for this Choreo. ((conditional, integer) Specifies a single year; defaults to all years.)
        */
        this.set_FiscalYear = function(value) {
            this.setInput("FiscalYear", value);
        }

        /*
        Set the value of the FundingAgency input for this Choreo. ((conditional, string) The 4-digit code for a specific governmental agency that is responsible for funding/distributing the ARRA funds to recipients.)
        */
        this.set_FundingAgency = function(value) {
            this.setInput("FundingAgency", value);
        }

        /*
        Set the value of the FundingTAS input for this Choreo. ((conditional, string) The Agency Treasury Account Symbol (TAS) that identifies the funding Program Source. The Program Source is based out of the OMB TAS list.)
        */
        this.set_FundingTAS = function(value) {
            this.setInput("FundingTAS", value);
        }

        /*
        Set the value of the GovtContractOffice input for this Choreo. ((conditional, string) The agency supplied code of the government contracting office that executed the transaction. (For prime recipients only.))
        */
        this.set_GovtContractOffice = function(value) {
            this.setInput("GovtContractOffice", value);
        }

        /*
        Set the value of the LastYearRange input for this Choreo. ((conditional, integer) Specifies the last year in a range of years; if used, must be used with FirstYearRange and without FiscalYear.)
        */
        this.set_LastYearRange = function(value) {
            this.setInput("LastYearRange", value);
        }

        /*
        Set the value of the MaxRecords input for this Choreo. ((optional, integer) Allows you to set the maximum number of records retrieved. Defaults to 100.)
        */
        this.set_MaxRecords = function(value) {
            this.setInput("MaxRecords", value);
        }

        /*
        Set the value of the NumberOfJobs input for this Choreo. ((conditional, integer) The number of Full-Time Equivalent (FTE) jobs created and retained.)
        */
        this.set_NumberOfJobs = function(value) {
            this.setInput("NumberOfJobs", value);
        }

        /*
        Set the value of the OfficerComp input for this Choreo. ((conditional, integer) Total compensation of first highly compensated officer.)
        */
        this.set_OfficerComp = function(value) {
            this.setInput("OfficerComp", value);
        }

        /*
        Set the value of the OrderNumber input for this Choreo. ((conditional, string) This is an identifying number assigned to the contract.)
        */
        this.set_OrderNumber = function(value) {
            this.setInput("OrderNumber", value);
        }

        /*
        Set the value of the PopCity input for this Choreo. ((conditional, string) The city in which work was performed.)
        */
        this.set_PopCity = function(value) {
            this.setInput("PopCity", value);
        }

        /*
        Set the value of the PopCountry input for this Choreo. ((conditional, string) The two-letter country code for the country in which work was performed.)
        */
        this.set_PopCountry = function(value) {
            this.setInput("PopCountry", value);
        }

        /*
        Set the value of the PopDistrict input for this Choreo. ((conditional, string) The Congressional District in which work was performed.)
        */
        this.set_PopDistrict = function(value) {
            this.setInput("PopDistrict", value);
        }

        /*
        Set the value of the PopState input for this Choreo. ((conditional, string) The two-letter code for the state in which in which work was performed (the "place of performance").)
        */
        this.set_PopState = function(value) {
            this.setInput("PopState", value);
        }

        /*
        Set the value of the PopZip input for this Choreo. ((conditional, integer) The ZIP code in which work was performed.)
        */
        this.set_PopZip = function(value) {
            this.setInput("PopZip", value);
        }

        /*
        Set the value of the ProjectDescription input for this Choreo. ((conditional, string) A description of the project under which the award is funded.)
        */
        this.set_ProjectDescription = function(value) {
            this.setInput("ProjectDescription", value);
        }

        /*
        Set the value of the RecipientDistrict input for this Choreo. ((conditional, string) A 4-character numeric designation for the Congressional District within which a recipient or vendor is located. (For prime recipients and sub-recipients only.))
        */
        this.set_RecipientDistrict = function(value) {
            this.setInput("RecipientDistrict", value);
        }

        /*
        Set the value of the RecipientName input for this Choreo. ((conditional, string) The name of the recipient (prime recipient, sub-recipient, or vendor); value given is used as a text search.)
        */
        this.set_RecipientName = function(value) {
            this.setInput("RecipientName", value);
        }

        /*
        Set the value of the RecipientStateCode input for this Choreo. ((conditional, string) The postal state abbreviation for the state in the recipient's address (can be for prime recipient, sub-recipient, or vendor).)
        */
        this.set_RecipientStateCode = function(value) {
            this.setInput("RecipientStateCode", value);
        }

        /*
        Set the value of the RecipientType input for this Choreo. ((conditional, string) Recipient or vendor type: p = Prime recipients only, s = Sub-recipients only, v = Vendors only.)
        */
        this.set_RecipientType = function(value) {
            this.setInput("RecipientType", value);
        }

        /*
        Set the value of the RecipientZip input for this Choreo. ((conditional, integer) The ZIP code of the recipient (prime recipient, sub-recipient, or vendor).)
        */
        this.set_RecipientZip = function(value) {
            this.setInput("RecipientZip", value);
        }

        /*
        Set the value of the Sort input for this Choreo. ((optional, string) Determines the order in which records are sorted. The default value sorts by Recipient/Vendor Name. See doc for all other values.)
        */
        this.set_Sort = function(value) {
            this.setInput("Sort", value);
        }

        /*
        Set the value of the TextSearch input for this Choreo. ((conditional, string) Full text search.)
        */
        this.set_TextSearch = function(value) {
            this.setInput("TextSearch", value);
        }

}

/*
A ResultSet with methods tailored to the values returned by the Recovery Choreo.
The ResultSet object is used to retrieve the results of a Choreo execution.
*/

var RecoveryResultSet = function(resultStream) {
    RecoveryResultSet.super_.call(this, resultStream);    
        /*
        Retrieve the value for the "Response" output from this Choreo execution. ((xml) The response from FedSpending.org.)
        */
        this.get_Response = function() {
            return this.getResult("Response");
        }
}

util.inherits(Recovery, choreography.Choreography);
util.inherits(RecoveryInputSet, choreography.InputSet);
util.inherits(RecoveryResultSet, choreography.ResultSet);
exports.Recovery = Recovery;

