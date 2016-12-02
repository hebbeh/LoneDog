'use strict';

// Declare app level module which depends on views, and components
angular.module('loneDog', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


// Define the `phonecatApp` module
var loneDog = angular.module('loneDog', []);

// main-controller
loneDog.controller('MainCtrl', function MainCtrl($scope) {
  $scope.phones = [
    {
      name: 'Bladder',
      //snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Hygiene',
      //snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'Hunger',
      //snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'Fun',
      //snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'Thirst',
      //snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'Sleep',
      //snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'Stress',
      //snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
