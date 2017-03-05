// jshint node: true
// jshint esnext: true
'use strict';

const PROJECT_NAME = 'project';

module.exports = {

	src: {
		root: 'src/',
		pug: [
			'src/**/*.pug'
		],
		styl: [
			'src/**/*.styl'
		],
		js: [
			'src/**/*.js'
		],
		assets: [
			'src/**/*.png',
			'src/**/*.svg'
		]
	},

	dist: {
		root: 'dist/',
		filenames: {
			html: PROJECT_NAME + '.html',
			css: PROJECT_NAME + '.css',
			js: PROJECT_NAME + '.js'
		}
	},

	vendor: {
		filenames: {
			css: 'vendor.css',
			js: 'vendor.js'
		},
		css: [
			'./node_modules/reset-css/reset.css'
		],
		js: [
			'./node_modules/angular/angular.min.js',
			'./node_modules/angular-route/angular-route.min.js'
		]
	}

};
