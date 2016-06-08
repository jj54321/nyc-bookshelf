angular
.module('myApp')
.service('AuthorModel', function ($http) {
    var service = this,
  getUrl = 'http://localhost:3000/authors/'
  service.all = function () {
      return $http.get(getUrl);
    };

  service.find = function (author) {
      var find_url = getUrl + String(author);
      return $http.get(find_url);
      };

  })
