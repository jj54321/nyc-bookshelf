angular
.module('myApp')
.service('GenreModel', function ($http) {
    var service = this,
  getUrl = 'http://localhost:3000/genres/'
  service.all = function () {
      return $http.get(getUrl);
    };

  service.find = function (genre) {
      var find_url = getUrl + String(genre);
      return $http.get(find_url);
      };

  })
