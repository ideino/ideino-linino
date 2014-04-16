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
},1500);



fetchIdeinoStatus(urlIdeino,function(status){
	if(status)
		document.getElementById("ideinoform").action = urlIdeino;
	//else{//default
	//}
		
});

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