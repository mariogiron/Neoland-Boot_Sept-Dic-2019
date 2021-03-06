var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const personasRouter = require('./routes/personas');
const escritoresRouter = require('./routes/escritores');

var app = express();

// view engine setup
// Configuramos dónde se encuentra nuestro directorio de rutas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(new Date());
  next();
});

app.use((req, res, next) => {
  fs.appendFile('./log.txt', `Método: ${req.method}. URL: ${req.url}\n`, () => {
    next();
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter);
app.use('/personas', personasRouter);
app.use('/escritores', escritoresRouter);

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
