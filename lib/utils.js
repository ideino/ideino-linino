var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;

exports.copyDir = function(req,res){
	ncp.limit=16;
	ncp(req.source, req.destination, function(err){
		if (err){
			return console.error(err);
		}
	})
}

exports.delDir=function(req,res){
	var fname = 'Delete file';
	var itemPath = this.getPath(req);
	require('rimraf')(itemPath, function(err) {
		var msg = (err ? 'Cannot remove directory ' : 'Directory removed ') + '[' + itemPath + ']';
		/*res.send({
			name: fname,
			msg: msg,
			err: !!err
		});*/
	});
	
}

// resolve path from path or path parts
exports.getPath = function(mixed) {
	if (Array.isArray(mixed))
	{
		return path.join.apply(this, mixed);
	} else {
  	return mixed.indexOf('[') != 0 ? mixed : path.join.apply(this, JSON.parse(mixed));
	}
}


exports.readDir = function(dirPath, callback) {
	
  fs.readdir(dirPath, function(err, items) {
    if (err) {
      console.log(err);
      callback(err);
    }
		if (!items || !items.length) {
			callback(null, items);
		} else {
			// read dir stats
			var pending = items.length;
			items.forEach(function(item, index) {
				var itemPath = path.join(dirPath, item);
				fs.stat(itemPath, function(err, stat) {
					items[index] = {
						name: path.basename(itemPath),
						isDirectory: stat.isDirectory(),
						ext: path.extname(itemPath)
					};
					if (!--pending) {
						callback(null, items);
					}
				});
			});
		}
		
  });
	
}
