'use strict';

/* Controllers */

var andibControllers = angular.module('andibControllers', []);

andibControllers.controller('StartCtrl', ['$scope',
  function($scope) {
  }]);
  
andibControllers.controller('MitarbeiterCreateCtrl', ['$scope', '$location', 'Mitarbeiterliste',
  function($scope, $location, Mitarbeiterliste) {
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
	   	Mitarbeiterliste.addMitarbeiter(user);
	  	$scope.mitarbeiterliste = Mitarbeiterliste.getMitarbeiter();
	  };
	
	  $scope.reset = function() {
	    $scope.user = angular.copy($scope.master);
	  };
	
	  $scope.isUnchanged = function(user) {
	    return angular.equals(user, $scope.master);
	  };
	
	  $scope.reset();
	  
	  $scope.go = function ( path ) {
		  $location.path( path );
		};
	  
  }]);
  
andibControllers.controller('MitarbeiterListCtrl', ['$scope', 'Mitarbeiterliste',
  function($scope, Mitarbeiterliste) {
  	$scope.mitarbeiterliste = Mitarbeiterliste.getMitarbeiter();

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
