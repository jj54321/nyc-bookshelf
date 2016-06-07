
angular
	.module('myApp', [
		'ngAnimate',
		'ui.router',
		'templates',
		'Devise'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'HomeCtrl as ctrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'devise/_login.html',
				controller: 'AuthCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'devise/_register.html',
				controller: 'AuthCtrl'
			})
			.state('show', {
				url: '/books/:id',
				templateUrl: 'show.html',
				controller: "HomeCtrl as ctrl"
			})
			.state('new', {
				url: '/books/new/',
				templateUrl: 'new.html',
				controller: "HomeCtrl as ctrl"
			})
			.state('edit', {
				url: '/books/edit/',
				templateUrl: 'edit.html',
				controller: "HomeCtrl as ctrl"
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
