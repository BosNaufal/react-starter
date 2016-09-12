var gulp = require('gulp'),
	sass = require('gulp-sass'),
	webpack = require('webpack-stream'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

gulp.task('sass', () => {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/assets/css/'))
})

gulp.task('script', () => {
	return gulp.src('./src/js/main.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./public/'))
})

gulp.task('serve',['sass','script'], () => {
	browserSync.init({
		server: {
			baseDir: './public'
		}
	})

	gulp.watch('./src/js/**/*.js',['script'])
	gulp.watch('./src/sass/**/*.scss',['sass'])
	gulp.watch('./public/**/*.*').on('change', browserSync.reload)
})