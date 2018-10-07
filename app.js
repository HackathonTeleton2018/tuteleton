var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());
// database setup
app.models = require('./models');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var multipart = bodyParser.urlencoded({
  extended: true,
  parameterLimit: 100000,
  limit: '50mb'
});

app.use(function (req, res, next) {
  var isMultipart = /^multipart\//i;
  var type = req.get('Content-Type');
  if (isMultipart.test(type)) return multipart(req, res, next);
  else return next();
});

app.use(bodyParser.json({
  parameterLimit: 100000,
  limit: '50mb'
}));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;