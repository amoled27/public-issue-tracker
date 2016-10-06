'use strict';

angular.module('myApp.testController', ['firebase'])

.controller('testController', function($scope, $firebaseObject) {
	var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);

  $scope.checkshit = function(){
  	console.log($scope.data['posts']);
  };

});