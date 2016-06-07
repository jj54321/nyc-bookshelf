angular.module('myApp')
	.controller('HomeCtrl', function ($scope, BookModel, VoteModel, $stateParams, $state) {

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
	        $state.go('dashboard.one');
	      });
	  }
	function initCreateForm() {
	    ctrl.newBook = { title: "", author: "", genre: "" };
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

function VoteBook(newVote) {
		VoteModel.create(newVote)
			.then(function (result) {
				initCreateForm();
					getBook();
			});
	}
function initCreateForm() {
		ctrl.newVote = { user_id: "Going to have users", book_id: $stateParams.id };
	}
ctrl.VoteBook = VoteBook;
	initCreateForm();
})










		// $http.get('/books').success(function(data) {
	  //   $scope.books = data;
	  // });


	// });
