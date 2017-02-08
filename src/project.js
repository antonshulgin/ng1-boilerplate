(function () {
	// jshint latedef: false
	'use strict';

	angular.module('project', [
		'ngRoute',
		'project.fallback'
	])
	.config([
		'$locationProvider',
		locationProviderConfig
	])
	.config([
		'$routeProvider',
		routeProviderConfig
	]);

	function locationProviderConfig($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	}

	function routeProviderConfig($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/fallback'
		});
	}

})();
