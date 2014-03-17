// requires
var express = require('express'),
	passport=require('passport'),
	flash=require('connect-flash'),
	LocalStrategy=require('passport-local').Strategy,
	spawn = require('child_process').spawn,
	os = require('os'),
	path = require('path'),
	fs = require('fs'),
	ejs = require('ejs-locals'),
	childprocs = require('./lib/childprocs');
	
var users = [
    { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
  , { id: 2, username: 'joe', password: 'secret', email: 'joe@example.com' }
];

function findById(id, fn) {
  var idx = id - 1;
  if (users[idx]) {
    fn(null, users[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

function findByUsername(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});


passport.use(new LocalStrategy(
  /*function(username, password, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // Find the user by username.  If there is no user with the given
      // username, or the password is not correct, set the user to `false` to
      // indicate failure and set a flash message.  Otherwise, return the
      // authenticated `user`.
      findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
        return done(null, user);
      })
    });
  }*/


  function(username, password, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
		var cmd = spawn ('lua',[path.join(__dirname,'lib/checkpwd.lua'),username, password]);
		cmd.on('close', function (code) {
			switch(code)
			{
				case 100:
					done(null,false,{message: 'Invalid password'});
					console.log('Check fail');
					break;
				case 101:
					console.log('Check success');
					done(null,{ id: 1 }); //devo per forza dargli un id presente nell'array in alto
					break;
				default:
					done(null,false,{message: 'Cannot log in'});
					console.log('Check fail');
			}	
		});	
		
    });
  }

  
));

app = express();

var server = require('http').createServer(app),
  io = require('socket.io').listen(server,{log:false});
  
  io.set('transports',['xhr-polling']);
  io.set('log level',1);
// ideino config

//ST find ip addresses
var interfaces = os.networkInterfaces();
var addresses = [];
for (k in interfaces) {
    for (k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family == 'IPv4' && !address.internal) {
            addresses.push(address.address)
        }
    }
}
if(addresses.length == 0){
	addresses.push("localhost");
}
//ST find ip addresses
var ideinoConfig = {};
if (fs.existsSync('./ideino.json')) {
  ideinoConfig = require('./ideino.json');
}
// set up default prj dir - used in the absence of a 'path' query string
if (!ideinoConfig.projectsDir) ideinoConfig.projectsDir = path.join(__dirname, 'ideino/projects/user');
if (!ideinoConfig.templatesDir) ideinoConfig.templatesDir = path.join(__dirname, 'ideino/templates')
//ST: changing loopback or localhost to real ip address
if (!ideinoConfig.framesUrl1) ideinoConfig.framesUrl1 = "http://"+addresses[0]+":3000";
if (!ideinoConfig.framesUrl2) ideinoConfig.framesUrl2 = "http://"+addresses[0]+":8080/debug?port=5858";
//ST: changing loopback or localhost to real ip address
app.set('ideinoConfig', ideinoConfig);
// initialize locals
app.locals({
  metaTitle: 'Ideino',
  templates: fs.readFileSync(path.join(__dirname,'./public/html/templates.html'))
});
// register .html extension
app.engine('html', ejs);
// configure
var port = process.env.PORT || 2424;
var sessionStore = new express.session.MemoryStore({
  reapInterval: 60000 * 10
});
app.configure(function() {
  app.use(express.favicon( path.join(__dirname,'/public/favicon.ico'))); 
  app.set('port', port);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'html');
  app.use(express.cookieParser());
  //app.use(express.logger());//ST PASSPORT -> express logger
  app.use(express.session({
    store: sessionStore,
    secret: '5up3453c43t',
    key: 'sid'
  }));
  app.use(express.bodyParser());
  app.use(flash()); //ST PASSPORT
  app.use(express.methodOverride());
  app.use(express.favicon());
  app.use(express.compress());
  app.use(passport.initialize());//ST PASSPORT
  app.use(passport.session());//ST PASSPORT
  if (ideinoConfig.users) {
    app.use(express.basicAuth(function(user, pass, callback) {
      callback(null, ideinoConfig.users[user] == pass);
    }));
  }
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});
process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
// routing
require('./lib/routing').configure();
// initialize server / start listening
server.listen(port, function() {
  console.log('Listening on ' + port);
});
// child processes
childprocs.connect(io, sessionStore);
app.set('childprocs', childprocs);