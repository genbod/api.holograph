var mongoose = require('mongoose');
var caseRouter = require('./routers/case');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var helmet = require('helmet');
var express = require('express');
var app = express();

mongoose.connect('mongodb://holographdb:p0OXcbnJaZGeywY0MXXIwTlc93Vzkl3xSkY0J2deB9ICdJRXyFuG1bVUGFXnCZGK92zGIUJlHVjT7ltsQW7Aww==@holographdb.documents.azure.com:10255/?ssl=true' || 'mongodb://localhost:27017/holograph', (error) => {
  if(error) {
    throw error;
  }
});

// app settings
app.use(helmet());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());

// routes
app.use('/v1/cases', caseRouter);

app.use((err, req, res, next) => {
  console.log(JSON.stringify(err));
  return res.status(err.status).json(err);
});

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Holograph API listening at %s', listener.address().port);
});