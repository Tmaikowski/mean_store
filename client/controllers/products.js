app.controller('ProductsController', function(ProductFactory) {
  var self = this;
  self.products = [];

  self.index = function() {
    ProductFactory.index(function(products) {
      self.products = products.data;
    });
  };

  self.create = function(newProduct) {
    ProductFactory.create(newProduct, function(products) {
      self.index();
      angular.copy({}, newProduct);
    });
  };

});
