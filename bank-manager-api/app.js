let createError   = require('http-errors');
let express       = require('express');
let path          = require('path');
let cookieParser  = require('cookie-parser');
let logger        = require('morgan');
let cors          = require('cors');

let indexRouter         = require('./routes/index');
let depensesRouter      = require('./routes/depenses');
let revenusRouter       = require('./routes/revenus');
let categoriesRouter    = require('./routes/categories');
let crediteursRouter    = require('./routes/crediteurs');
let beneficiaireRouter  = require('./routes/beneficiaires');
let cryptoRouter        = require('./routes/cryptos');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/depenses', depensesRouter);
app.use('/revenus', revenusRouter);
app.use('/categories', categoriesRouter);
app.use('/beneficiaires', beneficiaireRouter);
app.use('/crediteurs', crediteursRouter);
app.use('/cryptos', cryptoRouter);

const db = require("./models");
db.sequelize.sync();

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
