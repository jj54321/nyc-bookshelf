angular.module('myApp')
	.controller('HomeCtrl', function ($scope, $http) {
		$http.get('/books').success(function(data) {
	    $scope.books = data;
	  });
	});
