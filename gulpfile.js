const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
	return gulp.src('public/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/css/'));
});

gulp.task('clean', () => {
	return del([
		'public/css/main.css',
	]);
});

gulp.task('watch', () => {
	gulp.watch('public/sass/**/*.scss', (done) => {
		gulp.series(['clean', 'styles'])(done);
	});
});

//gulp.task('default', gulp.series(['clean', 'styles']));
gulp.task('default', gulp.series(['watch']));