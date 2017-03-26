const gulp = require('gulp');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');

module.exports = (path) => {
  return gulp.src([`${path}/**.css`, `!${path}/**.min.css`]).pipe(cleanCSS({
    compatibility: 'ie8'
  })).pipe(rename({
    extname: '.min.css'
  })).pipe(gulp.dest(path))
}
