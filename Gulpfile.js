var gulp = require('gulp');
var less = require('gulp-less');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');

gulp.task('js', function() {
    gulp.src(['./js/grid-square.js'])
        .pipe(concat("grid-square.js"))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(concat("grid-square.min.js"))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('less', function() {
    gulp.src(['./less/grid-square.less'])
        .pipe(less())
        .pipe(concat("grid-square.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCSS())
        .pipe(concat("grid-square.min.css"))
        .pipe(gulp.dest('dist/css'));

});

gulp.task('default', ["js", "less"]);