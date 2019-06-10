var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var msql = require('mssql');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var findUserRouter = require('./routes/findusers');

var port = process.env.PORT || 5000;

var config = {
  user: 'sa',
  password: '123456',
  server: '192.168.1.59',
  port: 1433,
  database: 'DBAccenture'
}

var app = express();
app.use(cors());
var connection = new msql.connect(config, function(err, res){
  if(err){
    console.log('Error', err);
  }else{
    console.log('Conexion to BD correct!!');
    app.listen(port, function(){
      console.log('Api rest running by http://localhost:' + port);
    })
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/save-users', usersRouter);
app.use('/find-user', findUserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
