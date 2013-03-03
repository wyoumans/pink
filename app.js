/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('3qkSmXhC5amwVu'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({
    src: __dirname + '/public'
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.locals({
  site_name: 'Pink',
  ga_tracking_code: process.env.GA_TRACKING_CODE || 'UA-XXXXXXXXXX-XX'
});

app.get('/', routes.index);
app.get('/will', routes.will);
app.get('/megan', routes.megan);
app.get('/story', routes.story);
app.get('/photos', routes.photos);
app.get('/venue', routes.venue);
app.get('/registry', routes.registry);
app.get('/contact', routes.contact);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});