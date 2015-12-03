import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';
import istanbul from 'gulp-babel-istanbul';
import mergeStream from 'merge-stream';

const dirs = {
  src: 'lib',
  test: 'test',
  dest: 'build'
};

gulp.task('default', () => {
  return gulp.src(`${dirs.test}/*.js`)
    .pipe(babel())
    .pipe(mocha())
});
 
gulp.task('test', (cb) => {
  mergeStream(
    gulp.src(['lib/**/*.js', 'main.js'])
      .pipe(istanbul()),
    gulp.src(['test/*.js'])
      .pipe(babel())
  ).pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran 
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 10 } })) // Enforce a coverage of at least 90% 
        .on('end', cb);
    });
});