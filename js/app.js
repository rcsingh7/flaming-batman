var batman = angular.module('flaming-batman', ['ngRoute']);

batman.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'home.html'
    })
    .when('/batman', {
      templateUrl:'batman.html'
    })
    .when('/cool-facts', {
      templateUrl:'cool-facts.html'
    })
    .when('/enemies', {
      templateUrl:'enemies.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});