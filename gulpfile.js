var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');

var dirs = {
  src: 'src',
  test: 'test',
  dest: 'build'
};

gulp.task('default', function() {
  return gulp.src(dirs.test + '/*.js')
    .pipe(babel())
    .pipe(mocha());
});
