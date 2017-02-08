(function () {
	// jshint latedef: false
	'use strict';

	angular.module('project.fallback', [
		'ngRoute',
	])
	.config([
		'$routeProvider',
		routeProviderConfig
	]);

	function routeProviderConfig($routeProvider) {
		$routeProvider.when('/fallback', {
			templateUrl: '/routes/fallback/fallback.html',
			controller: FallbackController,
			controllerAs: 'fallback'
		});
	}

	function FallbackController() {
		var fallback = this;

		fallback.title = 'Fallback route';
	}

})();
