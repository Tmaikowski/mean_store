app.controller('DashboardController', function(CustomerFactory, ProductFactory, OrderFactory) {
  console.log("IN DASHBOARD CTRL");
  var self = this;
  self.recentProducts = [];
  self.recentOrders = [];
  self.newCustomers = [];
  self.date = new Date();

  self.getProducts = function() {
    ProductFactory.index(function(products) {
      self.recentProducts = products.data;
    });
  };

  self.getRecentOrders = function() {
    OrderFactory.index(function(orders) {
      self.recentOrders = orders.data;
    });
  };

  self.getNewCustomers = function() {
    CustomerFactory.index(function(customers) {
      self.newCustomers = customers.data;
    });
  };

  self.getProducts();
  self.getRecentOrders();
  self.getNewCustomers();
});
