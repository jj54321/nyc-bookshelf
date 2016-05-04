angular
    .module('bookshelf', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('bookshelf', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            });
    });
