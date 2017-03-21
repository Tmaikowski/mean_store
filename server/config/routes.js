var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app) {
  //Customer Routes
  app.get('/customers', function(req, res) {
    customers.index(req, res);
  });

  app.post('/customers', function(req, res) {
    customers.create(req, res);
  });

  app.post('/customers/destroy/:id', function(req, res) {
    customers.destroy(req, res);
  });

  //Products Routes
  app.get('/products', function(req, res) {
    products.index(req, res);
  });

  app.post('/products', function(req, res) {
    products.create(req, res);
  });

  //Orders Routes
  app.get('/orders', function(req, res) {
    orders.index(req, res);
  });

  app.post('/orders', function(req, res) {
    orders.create(req, res);
  });

}
