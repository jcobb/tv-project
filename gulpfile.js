var gulp = require('gulp');
var react = require('gulp-react');
var watcher = require('gulp-watch');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('default', ['sass','jsx']);

gulp.task('sass', function () {
    gulp.src('public/src/scss/*.scss')
        .pipe(plumber())
        .pipe(watcher('public/src/scss/*.scss'))
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('jsx', function () {
    return gulp.src('public/src/jsx/*.jsx')
        .pipe(plumber())
        .pipe(watcher('public/src/jsx/*.jsx'))
        .pipe(react({harmony: true, es6module: true}))
        .pipe(gulp.dest('public/libs/react'));
});