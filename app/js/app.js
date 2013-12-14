'use strict';

/* App Module */

var phonecatApp = angular.module('andibApp', [
  'ngRoute',
  'andibControllers',
  'andibFilters',
  'andibServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'partials/start.html',
        controller: 'StartCtrl'
      }).
	  when('/start/mitarbeiterCreate', {
        templateUrl: 'partials/mitarbeiterCreate.html',
        controller: 'mitarbeiterCreateCtrl'
      }).
  	  when('/start/mitarbeiterList', {
        templateUrl: 'partials/mitarbeiterList.html',
        controller: 'mitarbeiterListCtrl'
      }).
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/start'
      });
  }]);
