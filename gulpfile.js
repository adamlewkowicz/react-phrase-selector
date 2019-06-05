const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json', {});

gulp.task('ts:build', () => gulp.src('src/**/*.tsx')
  .pipe(tsProject())
  .js
  .pipe(gulp.dest('dist'))
);