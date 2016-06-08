angular.module('myApp')
	.controller('GenreCtrl', function ($scope, GenreModel, $stateParams, $state, Auth) {

    function getGenres() {
			GenreModel.all()
				.then(function (result) {
					$scope.genres = result.data;
				});
		}
		$scope.genres = [];
		$scope.getGenres = getGenres;
		getGenres();

    function getGenre() {
      GenreModel.find($stateParams.id).then(function (result){
        $scope.genre = result.data;
        $scope.books = result.data.books;
      });
    }
    $scope.genre = '';
    $scope.books = [];
    $scope.getGenre = getGenre;
    getGenre();

})
