angular.module('myApp')
	.controller('HomeCtrl', function ($scope, BookModel, $stateParams) {
		function getBooks() {
			BookModel.all()
				.then(function (result) {
					$scope.books = result.data;
				});
		}
		$scope.books = [];
		$scope.getBooks = getBooks;
		getBooks();




	// function getBook() {
	// 	BookModel.find($stateParams.id).then(function (result){
	// 		$scope.book = result[0].data;
	// 	});
	// }
	// $scope.book = [];
	// $scope.getBook = getBook;
	// getBook();


	function createBook(book) {
	    BookModel.create(book)
	      .then(function (result) {
	        initCreateForm();
	        getBooks();
	      });
	  }
	function initCreateForm() {
	    $scope.newBook = { name: '', author: '' };
	  }
	$scope.createBook = createBook;
	  initCreateForm();
	})



		// $http.get('/books').success(function(data) {
	  //   $scope.books = data;
	  // });


	// });
