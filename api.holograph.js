var env = require('dotenv').config();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());



// Error handler
app.use((err, req, res, next) => {
  var response = {
    message: err.message,
    status: err.status || 400
  };

  return res.status(response.status).json(response);
});

var listener = app.listen(process.env.PORT, () => {
  console.log('Holograph API running in port ' + listener.address().port);
});