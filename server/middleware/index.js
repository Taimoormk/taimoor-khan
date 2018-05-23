var path = require('path');
var morgan = require('morgan');
var express = require('express');

module.exports = app => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../../dist')));
};