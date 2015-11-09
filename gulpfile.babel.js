import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';

const dirs = {
  src: 'src',
  test: 'test',
  dest: 'build'
};

gulp.task('default', () => {
  return gulp.src(`${dirs.test}/*.js`)
    .pipe(babel())
    .pipe(mocha());
});
