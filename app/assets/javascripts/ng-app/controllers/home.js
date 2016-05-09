angular.module('myApp')
	.controller('HomeCtrl', function ($scope, BookModel, $stateParams, $state) {

		var ctrl = this;



		function getBooks() {
			BookModel.all()
				.then(function (result) {
					$scope.books = result.data;
				});
		}
		$scope.books = [];
		$scope.getBooks = getBooks;
		getBooks();




	function getBook() {
		BookModel.find($stateParams.id).then(function (result){
			$scope.book = result.data;
		});
	}
	$scope.book = "";
	$scope.getBook = getBook;
	getBook();


	function createBook(book) {
	    BookModel.create(book)
	      .then(function (result) {
	        initCreateForm();
	        $state.go('home');
	      });
	  }
	function initCreateForm() {
	    ctrl.newBook = { title: "", author: "" };
	  }
	ctrl.createBook = createBook;
	  initCreateForm();

	function deleteBook(bookId) {
    BookModel.destroy(bookId)
      .then(function (result) {
        $state.go('home');
      });
  }
ctrl.deleteBook = deleteBook;

})





		// $http.get('/books').success(function(data) {
	  //   $scope.books = data;
	  // });


	// });
