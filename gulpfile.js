var path = require('path');
var gulp = require('gulp');
var pug = require('gulp-pug');
var connect = require('gulp-connect');//liveload
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
// Load plugins
var $ = require('gulp-load-plugins')();

/* es6 */
gulp.task('es6', function() {

    return gulp.src('src/**/*.js')
      .pipe($.plumber())
      .pipe($.babel({
          presets: ['es2015']
      }))
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
});


gulp.task('pug', () => {
  return gulp.src('./src/**/*.jade')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})

gulp.task('js', () => {
  return gulp.src('./src/**/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})

//自动监测文件变化
gulp.task('watch', ()=>{
  gulp.watch('src/**/*.jade', ['pug']);
  gulp.watch('src/**/*.js', ['es6']);

})

//livereload
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: '8989',
        livereload: true
     })
})


gulp.task('default', ['watch','connect']);
