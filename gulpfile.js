var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('coffee', function(){
	gulp.src('scripts/coffee/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('scripts/js/'))
});

gulp.task('default', ['coffee']);

gulp.task('watch', function(){
	gulp.watch('scripts/coffee/*.coffee', ['coffee']);
});