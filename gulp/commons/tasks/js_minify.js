const gulp = require('gulp');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');

module.exports = (path) => {
  return gulp.src([`${path}/**.js`, `!${path}/**.min.js`]).pipe(uglify({
    // use default setting.
  })).on('error', (e) => {
    console.error(e.toString());
    this.emit("end");
  }).pipe(rename({
    extname: '.min.js'
  })).pipe(gulp.dest(path))
}
