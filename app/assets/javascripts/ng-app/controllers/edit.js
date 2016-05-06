angular.module('myApp')
	.controller('EditController', function ($scope, $http,  $stateParams) {
		$http.get('/books/' + $stateParams.id + "/edit").success(function(data) {
	    $scope.book = data[0];
	  });


	});
