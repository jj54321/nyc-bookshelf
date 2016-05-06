
angular
	.module('myApp', [
		'ngAnimate',
		'ui.router',
		'templates'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})
			.state('show', {
				url: '/books/:id',
				templateUrl: 'show.html',
				controller: "HomeCtrl"
			})
			.state('new', {
				url: '/books/new/',
				templateUrl: 'new.html',
				controller: "HomeCtrl"
			})
			.state('dashboard', {
					abstract: true,
					url: '/dashboard',
					templateUrl: 'dashboard/layout.html'
			})
			.state('dashboard.one', {
							url: '',
							templateUrl: 'dashboard/one.html'
					})
					.state('dashboard.two', {
							url: '/two',
							templateUrl: 'dashboard/two.html'
					})
					.state('dashboard.three', {
							url: '/three',
							templateUrl: 'dashboard/three.html'
					});

		$urlRouterProvider.otherwise('/');

		$locationProvider.html5Mode(true);

	});
