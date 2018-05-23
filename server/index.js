// create app
var express = require('express');
var app = express();

// run middleware
require('./middleware')(app);

// run routes
require('./routes')(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Running on port', port);
})