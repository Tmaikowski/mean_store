app.factory('ProductFactory', function($http) {
  var factory = {};

  factory.index = function(callback) {
    $http.get('/products').then(callback);
  };

  factory.create = function(newProduct, callback) {
    console.log("IN FACTORY")
    $http.post('/products', newProduct).then(callback);
  }

  return factory;
})
