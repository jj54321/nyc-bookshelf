angular
.module('myApp')
.service('VoteModel', function ($http) {
  var service = this;
  getUrl = 'http://localhost:3000/votes/';
  service.create = function (vote) {
    return $http.post(getUrl, vote);
  };
})
