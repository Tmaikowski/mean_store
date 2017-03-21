app.controller('CustomersController', function(CustomerFactory) {
  var self = this;
  self.customers = [];

  self.index = function() {
    CustomerFactory.index(function(customers) {
      self.customers = customers.data;
    });
  };

  self.create = function(newCustomer) {
    CustomerFactory.create(newCustomer, function() {
      self.index();
      angular.copy({},newCustomer);
    });
  };

  self.destroy = function(customerId) {
    CustomerFactory.destroy(customerId, function() {
      self.index();
    });
  };

});
