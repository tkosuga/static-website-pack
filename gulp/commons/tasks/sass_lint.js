const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');

module.exports = (path) => {
  return gulp.src(`${path}/**.s+(a|c)ss`)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};
