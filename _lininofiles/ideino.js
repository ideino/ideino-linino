/*	
*	Ideino is based on Noide project by Dave Stone https://github.com/davidjamesstone/noide. 
*	Ideino https://github.com/ideino/ideino-linino is released under the MIT License:
*	
*   Copyright (C) 2014 by Ideino
*
*/

/***
 * file: ideino.js
 * authors: https://github.com/quasto
 ***/
//document.location.reload(true);
var urlIdeino = "http://"+window.location.hostname+":2424/";
var formIdeino = document.getElementById("ideinoform");
var prevUrl = formIdeino.action;
setInterval(function(){
	fetchIdeinoStatus(urlIdeino,function(status){
		if(status){
			formIdeino.action = urlIdeino;			
		}else{
			formIdeino.action = prevUrl;	
		}
	});
},500);

function returnStatus(req, status, callback) {
	//console.log(status);
	if(status == 200) { //OK
		callback(true);
	}
	else //KO
	{
		callback(false);
	}
}

function fetchIdeinoStatus(address, callback) {
	var client = new XMLHttpRequest();

	client.open("HEAD", address);
	client.onreadystatechange = function() {
		if(this.readyState == 4)
			returnStatus(this, this.status, callback);
		}
	client.send();
	
}