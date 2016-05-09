angular
.module('myApp')
.service('BookModel', function ($http) {
  var service = this,
  getUrl = 'http://localhost:3000/books/'
  service.all = function () {
      return $http.get(getUrl);
    };
  service.find = function (book) {
      var find_url = getUrl + String(book);
      return $http.get(find_url);
    };
  service.create = function (book) {
    return $http.post(getUrl, book);
  };
  })
