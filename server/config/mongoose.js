var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/mean_store_db');

var modelsPath = path.join(__dirname, './../models');

fs.readdirSync(modelsPath).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
    console.log("REQUIRED:", file);
  };
});
