var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('coffee', function(){
	gulp.src('scripts/coffee/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('scripts/js/'));
});

gulp.task('final', function() {
	gulp.src('scripts/coffee/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(concat('compiled.js'))
		.pipe(gulp.dest('scripts/'));
});

gulp.task('production', function() {
	gulp.src('scripts/coffee/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(uglify())
		.pipe(concat('final.js'))
		.pipe(gulp.dest('scripts/'));
});

gulp.task('default', ['coffee', 'final', 'production']);

gulp.task('watch', function(){
	gulp.watch('scripts/coffee/*.coffee', ['coffee', 'final', 'production']);
});