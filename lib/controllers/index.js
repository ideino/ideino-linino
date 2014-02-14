var fs = require('fs');
var path = require('path');
var utils = require('../utils');

exports.filesystem = require('./filesystem');

exports.index = function(req, res) {
//	var pathquery = req.query.path;
	var ideinoConfig = app.get('ideinoConfig');
	var projquery=req.query.proj;
	var delprojquery=req.query.delproj;
	var cpprojquery=req.query.cpproj;
	var nwprojquery=req.query.nwproj;
	var nwwprojquery=req.query.nwwproj;
	//DELETE PROJECT
	if (delprojquery) {
		var pathquery=ideinoConfig.projectsDir + path.sep + req.query.delproj;
		//utils.delDir(pathquery);
		utils.delDir(pathquery,res);
		//res.render('index');
	}
	//NEW PROJECT based on EXITING PROJECT
	if (cpprojquery && nwprojquery){
		var srcquery=ideinoConfig.projectsDir + path.sep + req.query.cpproj;
		var destquery=ideinoConfig.projectsDir + path.sep + req.query.nwproj;
		var ncp = require('ncp').ncp;
		ncp.limit = 16;
		ncp(srcquery, destquery, function (err) {
		 if (err) {
		   return console.error(err);
		 }
			//res.render('index');
		});
	}
	//NEW PROJECT based on TEMPLATE
	if (nwwprojquery){
		var srcquery=ideinoConfig.templatesDir + path.sep + 'template';
		var destquery=ideinoConfig.projectsDir + path.sep + req.query.nwwproj;
		var ncp = require('ncp').ncp;
		ncp.limit = 16;
		ncp(srcquery, destquery, function (err) {
		 if (err) {
		   return console.error(err);
		 }
			//res.render('index');
		});		
	}
	if (projquery) {
		var pathquery = ideinoConfig.projectsDir + path.sep + req.query.proj;
//		console.log(pathquery);
		var dirPath = utils.getPath(pathquery);
		
		// read dir
		utils.readDir(dirPath, function(err, items) {
			if (err) {
				console.log(err);
				throw err;
			}
			
			var procs = app.get('childprocs').children;
			var pids = [];
			for (var p in procs) {
				if (procs[p].sid == req.session.id) {
					pids.push({
						pid: p,
						cmd: procs[p].cmd,
						paths: procs[p].paths
					});
				}
			}
			
			res.render('ide', {
				initData: {
					dir: items,
					path: dirPath,
					name: path.basename(dirPath),
					config: ideinoConfig,
					procs: pids
				}
			});
			
		});
		
	} else {
		
		var prjdir = ideinoConfig.projectsDir;
		
		// read dir
		utils.readDir(prjdir, function(err, items) {
			if (err) {
				console.log(err);
				throw err;
			}
			
			var dirs = items.filter(function(item) {
				return item.isDirectory;
			});
			
			var pending = dirs.length;
			if (!pending) res.render('index', { items: [] });
			dirs.forEach(function(dir, index) {
				dir.path = path.join(prjdir, dir.name);
				var pkg = path.join(dir.path, 'package.json'); 
				
				fs.readFile(pkg, function (err, data) {
					if (!err) {
						dir.package = JSON.parse(data);
					}
					if (!--pending) {
						res.render('index', { 
							items: dirs.filter(function(item) {
								return item.package;
							})
						});
					}
				});
				
			});
			
		});
		
	}
};