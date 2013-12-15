'use strict';

/* Services */

var andibServices = angular.module('andibServices', ['ngResource']);

andibServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
  
andibServices.factory('Mitarbeiterliste', ['$resource',
  function($resource){
    return $resource('mitarbeiter/mitarbeiterliste.json', {}, {
      query: {method:'GET'}
    });
  }]);