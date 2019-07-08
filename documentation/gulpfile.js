var gulp = require('gulp');
sass = require('gulp-sass');
sassGlob = require('gulp-sass-glob');
del = require('del');

sass.compiler = require('node-sass');


gulp.task('default', function () {
    return gulp.watch('./components/**/*', gulp.series('clean', 'sass'));
});

gulp.task('clean', function () {
    return del(['./public/css/staples-ds.css']);
});

gulp.task('sass', function () {
    return gulp
        .src('./public/css/scss/staples-ds.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'))
});
