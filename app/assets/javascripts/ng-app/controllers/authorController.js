angular.module('myApp')
	.controller('AuthorCtrl', function ($scope, AuthorModel, $stateParams, $state, Auth) {

    function getAuthors() {
			AuthorModel.all()
				.then(function (result) {
					$scope.authors = result.data;
				});
		}
		$scope.authors = [];
		$scope.getAuthors = getAuthors;
		getAuthors();

    function getAuthor() {
      AuthorModel.find($stateParams.id).then(function (result){
        $scope.author = result.data;
        $scope.books = result.data.books;
      });
    }
    $scope.author = '';
    $scope.books = [];
    $scope.getAuthor = getAuthor;
    getAuthor();

})
