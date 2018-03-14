var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var notice = require('gulp-notify');

gulp.task('babel', () => {
  gulp.src('./*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dest/'))
    .pipe(notice('babel task complete!!!'));
});
gulp.task('sass', () => {
  gulp.src('./*.scss')
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(gulp.dest('./dest/'))
    .pipe(notice('sass task complete!!!'));
});

gulp.task('watch', ['babel', 'sass', 'serve'], () => {
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./*.js', ['babel']).on('change', browserSync.reload);
});

gulp.task('serve', ['babel', 'sass'], function(){
  browserSync.init({
    server: './',
  });
});

gulp.task('default', ['watch'], () => {
  console.log('编译开始');
});