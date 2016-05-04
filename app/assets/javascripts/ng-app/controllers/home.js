angular.module('myApp')
	.controller('HomeCtrl', function ($scope, $http) {
		$http.get('/api/v1/books/.json').success(function(data) {
	    $scope.books = data;
	  });
	});
