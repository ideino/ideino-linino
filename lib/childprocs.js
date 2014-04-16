var spawn = require('child_process').spawn
  , which = require('./which')
  , utils = require('./utils')
	, children = {};

exports.children = children;

exports.connect = function(io, sessionStore) {
	
	io
	.set('authorization', function(handshakeData, callback) {
		console.log("authorization");
		if (!handshakeData.headers.cookie) return callback('socket.io: no found cookie.', false);
		var signedCookies = require('express/node_modules/cookie').parse(handshakeData.headers.cookie);
		handshakeData.cookies = require('express/node_modules/connect/lib/utils').parseSignedCookies(signedCookies, '5up3453c43t');
		handshakeData.sid = handshakeData.cookies['sid'];
		callback(null, true);
	})	
	.on('connection', function(socket) {	
		socket.on('kill', onkill);
		socket.on('spawn', onspawn);
		socket.on('bind', onbind);
		socket.on('spawnautorun', onspawnautorun);
	});
	
	function onkill(options, callback) {
		var pid = options.pid;
		children[pid].p.kill();
		callback(pid);
	}
	
	function onbind(options, callback) {
		var pid = options.pid;
		var cid = options.cid;
		var clientId = this.id;
  	var child = children[pid];
		var p = child.p;
		if (child.sid != this.handshake.sid) callback(null) // validate session ownership of proc
		p.removeAllListeners();
		p.stdout.removeAllListeners();
		p.stderr.removeAllListeners();
		bindchildexit(p, clientId, cid);
		//bindchildclose(p, clientId, cid);
		bindstdoutdata(p, clientId, cid);
		bindstderrdata(p, clientId, cid);
		//bindstderrclose(p, clientId, cid);
		callback(pid);
	}
	
	function onspawn(options, callback) {

		var clientId = this.id;
		console.log(clientId);
		var cid = options.cid; // backbone model id - used as the message handle
		var command = options.command;
		var paths = options.paths; paths.pop();
		var opts = command.split(new RegExp('\\s+'));
		
		//ST #0002 - add node parameter
		var op = opts.shift();
		//var cmd = which.sync(opts.shift());// todo - required for windows only
		//ST #0002 - add node parameter
		
		var cmd = which.sync(op);// todo - required for windows only
		var cwd = utils.getPath(paths);
		
		//ST #0002 - add node parameter
		if(op.toLowerCase() == 'node') // if node process add optimization parameters	
			opts.unshift("--stack_size=1024","--max_old_space_size=20","--max_new_space_size=2048","--max_executable_size=5","--gc_global","--gc_interval=100");
		//ST #0002 - add node parameter
		//ST #0003 - kill autorunned process before running from ideino
		var path = require('path');
		var autorun_path = p2 = path.normalize(__dirname+path.sep+".."+path.sep+"autorun");
		var config_file = path.join(autorun_path,'autorun.conf');
		var propeditor = require('properties-parser').createEditor(config_file);
		
		if(typeof(propeditor.get('IDEINOAPPPID')!='undefined' && op.toLowerCase() == 'node') ){
			var killautorun = spawn('kill',['-9',propeditor.get('IDEINOAPPPID')]);
			killautorun.on('close', function (code) {
				propeditor.set('IDEINOAPPPID','');
				propeditor.save(config_file);
				console.log('Autorun application '+propeditor.get('IDEINOAPP')+'['+propeditor.get('IDEINOAPPPID')+'] killed');
			});
		}
		//ST #0003 - kill autorunned process before running with ideino
		

		var child = spawn(cmd, opts, { cwd: cwd });
		var pid = child.pid;

		children[pid] = { p: child, sid: this.handshake.sid, cmd: command, paths: options.paths };
		
		bindchildexit(child, clientId, cid);
		//bindchildclose(child, clientId, cid);
		callback(pid);
		bindstdoutdata(child, clientId, cid);
		bindstderrdata(child, clientId, cid);
		//bindstderrclose(child, clientId, cid);
	}
	
	function onspawnautorun(options, callback){
		var clientId = this.id;
		var cid = options.cid; // backbone model id - used as the message handle
		//#1params
		var cmd = 'sh';//options.command.split(new RegExp('\\s+')).shift(); //autorun command
				
		var path = require('path');
		var p2 = path.normalize(__dirname+path.sep+".."+path.sep+"autorun")
		p2 = path.join(p2,'autorun.sh');
		
		//#2params
		var opts = options.paths;		
		opts.unshift(p2);
				
		var child = spawn(cmd, opts);
		var pid = child.pid;
		
		children[pid] = { p: child, sid: this.handshake.sid, cmd: cmd, paths: options.paths };
			
		bindchildexit(child, clientId, cid);
		//bindchildclose(child, clientId, cid);
		callback(pid);
		bindstdoutdata(child, clientId, cid);
		bindstderrdata(child, clientId, cid);
	}
	
	function bindchildexit(child, clientId, cid) {
		child.on('exit', function (code, signal) {
			delete children[this.pid];
			io.sockets.socket(clientId).emit(cid+'_childexit', code);
		});
	}
	
//	function bindchildclose(child, clientId, cid) {
//		child.on('close', function (code, signal) {
//			io.sockets.socket(clientId).emit(cid+'_childclose', code);
//		});
//	}
	
	function bindstdoutdata(child, clientId, cid) {
		child.stdout.on('data', function (data) {
			io.sockets.socket(clientId).emit(cid+'_stdoutdata', data.toString());
		});
	}
	
	function bindstderrdata(child, clientId, cid) {
		child.stderr.on('data', function (data) {
			io.sockets.socket(clientId).emit(cid+'_stderrdata', data.toString());
		});
	}
//
//	function bindstderrclose(child, clientId, cid) {
//		child.stderr.on('close', function (data) {
//			io.sockets.socket(clientId).emit(cid+'_stderrclose', data.toString());
//		});
//	}
		
}