'use strict';

/* Controllers */

var andibControllers = angular.module('andibControllers', []);

andibControllers.controller('StartCtrl', ['$scope',
  function($scope) {
  }]);
  
andibControllers.controller('MitarbeiterCreateCtrl', ['$scope', 'Mitarbeiterliste',
  function($scope, Mitarbeiterliste) {
	  $scope.titels = [
	    {titel:'Prof.'},
	    {titel:'Dr.'},
	    {titel:'Prof. Dr.'},
	    {titel:'B.Sc.'},
	    {titel:'M.Sc.'}
	  ];
	  $scope.user = {};
	  $scope.master = {};
	  
  	  $scope.hobbies= [
	    {hobby:''}
	  ];
	  
	  

	  $scope.save = function(user) {
      	$scope.mitarbeiterliste = Mitarbeiterliste.query(function(data){
      		user.hobbies=$scope.hobbies;
	  		data.mitarbeiter.push(user);
	  		data.$save();
	  		console.log($scope.mitarbeiterliste);
	  	});
	  };
	
	  $scope.reset = function() {
	    $scope.user = angular.copy($scope.master);
	  };
	
	  $scope.isUnchanged = function(user) {
	    return angular.equals(user, $scope.master);
	  };
	
	  $scope.reset();
	  
  }]);
  
andibControllers.controller('MitarbeiterListCtrl', ['$scope', 'Mitarbeiterliste',
  function($scope, Mitarbeiterliste) {
  	$scope.mitarbeiterliste = Mitarbeiterliste.query(function(data){
  	});

  }]);


andibControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

andibControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
