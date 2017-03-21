app.factory('CustomerFactory', function($http) {
  var factory = {};

  factory.index = function(callback) {
    $http.get('/customers').then(callback);
  };

  factory.create = function(newCustomer, callback) {
    $http.post('/customers', newCustomer).then(callback);
  };

  factory.destroy = function(customerId, callback) {
    $http.post(`/customers/destroy/${customerId}`).then(callback);
  }

  return factory;
})
