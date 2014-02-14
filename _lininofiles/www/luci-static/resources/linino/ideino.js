function getUrlIdeino(form){
	var urlIdeino = 'http://'+window.location.hostname+':2424/';
	form.action = urlIdeino;
}