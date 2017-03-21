app.controller('OrdersController', function(OrderFactory) {
  var self = this;
  self.orders = [];

  self.index = function() {
    OrderFactory.index(function(orders) {
      self.orders = orders.data;
      console.log(self.orders);
    });
  };

  self.create = function(newOrder) {
    OrderFactory.create(newOrder, function() {
      self.index();
      angular.copy({}, newOrder);
    });
  };

});
