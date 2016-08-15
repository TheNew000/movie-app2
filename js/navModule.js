// Assign a variable to the angular module.  Include dependencies
// If Angular cannot find the module it will crash
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);

// Attach controller to the main module
navRoutes.controller('navController', function($scope, $http){
    $scope.message = "I'm working!!";
})

// Attach a config to the module and bring in the $routeProvider service which is available because of the ngRoute above!  It has a "when" message and it watched the URL so when there's a match it files the callback
// It will set the templateURL which will go into the ng view in the view and set the conrtoeller to that view  As a last resort the otherwise will act as a catch all
navRoutes.config(function($routeProvider){
    $routeProvider.when('/nowPlaying', {
        templateUrl: 'templates/nowPlaying.html',
        controller: 'locationsController'
    });
    $routeProvider.when('/popular', {
        templateUrl: 'templates/popular.html',
        controller: 'contactController'
    });
    $routeProvider.when('/topRated', {
        templateUrl: 'templates/topRated.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/upComing', {
        templateUrl: 'templates/upComing.html',
        controller: 'aboutController'
    });
    $routeProvider.otherwise('#');

    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController as home'
      });
      $routeProvider.when('/profile/:id', {
        templateUrl: 'profile.html',
        controller: 'ProfileController as profile'
      });
});
