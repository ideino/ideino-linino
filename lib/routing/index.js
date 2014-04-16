var controllers = require('../controllers');
var passport = require('passport');
var cors = require('cors');

var corsOptions = {
  origin: true
};


exports.configure = function() {
	
	app.get('/', cors(corsOptions), function(req, res){
	  //res.render('welcome', { user: req.user });
	  res.render('login', { user: req.user });
	});

	app.get('/login', function(req, res){
	  res.render('login', { user: req.user, message: req.flash('error') });
	});

	app.post('/login', 
	  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
	  function(req, res) {
	    res.redirect('/account');
	});

	app.get('/logout', function(req, res){
	    req.logout();
		res.redirect('/');
	});
	
	//app.get('/', controllers.index);
	app.get('/account', ensureAuthenticated, controllers.index);
	app.get('/fs/dir', ensureAuthenticated, controllers.filesystem.getDir);
	app.post('/fs/dir', ensureAuthenticated, controllers.filesystem.addDir);
	app.get('/fs/file', ensureAuthenticated, controllers.filesystem.getFile);
	app.put('/fs/file', ensureAuthenticated, controllers.filesystem.saveFile);
	app.post('/fs/file', ensureAuthenticated, controllers.filesystem.addFile);
	app.put('/fs', ensureAuthenticated, controllers.filesystem.rename);
	app.delete('/fs', ensureAuthenticated, controllers.filesystem.delete);

	app.get('/procs', ensureAuthenticated, function(req, res) {
    var o = {
      sid: req.session.id
    };
    var childprocs = require('../childprocs').children;
    for (var el in childprocs) {
      o[el] = childprocs[el].sid;
    }
    res.send(o);
  });

	function ensureAuthenticated(req, res, next) {
	  if (req.isAuthenticated()) { 
		return next(); 
		}
	  res.redirect('/login');
	}


}