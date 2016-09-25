// jshint node: true
// jshint esnext: true
'use strict';

const config = require('./config.js');
const gulp = require('gulp');
const connect = require('gulp-connect');

require('./gulp-tasks/clean')(config);
require('./gulp-tasks/process-resources')(config);
require('./gulp-tasks/process-templates')(config);
require('./gulp-tasks/process-stylesheets')(config);
require('./gulp-tasks/process-stylesheets-vendor')(config);
require('./gulp-tasks/process-javascript')(config);
require('./gulp-tasks/process-javascript-vendor')(config);

gulp.task('default', [
	'build',
	'serve',
	'watch'
]);

gulp.task('build', [ 'clean' ], function () {
	return gulp.start([
		'process-javascript',
		'process-stylesheets',
		'process-javascript-vendor',
		'process-stylesheets-vendor',
		'process-templates',
		'process-resources'
	]);
});

gulp.task('serve', function () {
	connect.server({
		root: config.dist.root,
		fallback: config.dist.root + config.dist.filenames.html
	});
});

gulp.task('watch', [
	'watch-resources',
	'watch-templates',
	'watch-stylesheets',
	'watch-javascript'
]);
