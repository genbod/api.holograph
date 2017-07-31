var mongoose = require('mongoose');
var caseRouter = require('./routers/case');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var express = require('express');
var app = express();

mongoose.connect(process.env.DATABASE || 'mongodb://localhost:27017/holograph', (error) => {
  if(error) {
    throw error;
  }
});

// app settings
app.use(bodyParser());
app.use(expressValidator());

// routes
app.use('/v1/cases', caseRouter);

app.use((err, req, res, next) => {
  return res.status(err.status).json(err);
});

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Holograph API listening at %s', listener.address().port);
});