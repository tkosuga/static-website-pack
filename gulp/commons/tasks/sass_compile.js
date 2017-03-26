const gulp = require('gulp');
const rename = require("gulp-rename");
const touch = require('gulp-touch');
const sass = require('gulp-sass');

module.exports = (srcPath, buildPath) => {
  return gulp.src([`${srcPath}/**.s+(a|c)ss`, `!${srcPath}/**.sass.compiled.css`])
    .pipe(touch())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename({
      extname: '.sass.compiled.css'
    }))
    .pipe(gulp.dest(buildPath));
};
