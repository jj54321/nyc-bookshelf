angular.module('myApp')
	.controller('ShowController', function ($scope, $http,  $stateParams) {
		$http.get('/books/' + $stateParams.id).success(function(data) {
	    $scope.book = data[0];
	  });


	});
