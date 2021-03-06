var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/dashboard.html',
    controller: 'DashboardController as DC'
  })
  .when('/products', {
    templateUrl: '/partials/products.html',
    controller: 'ProductsController as PC'
  })
  .when('/orders', {
    templateUrl: '/partials/orders.html',
    controller: 'OrdersController as OC'
  })
  .when('/customers', {
    templateUrl: '/partials/customers.html',
    controller: 'CustomersController as CC'
  })
  .otherwise({
    redirectTo: '/'
  });
});
