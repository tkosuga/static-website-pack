const gulp = require('gulp');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

module.exports = (srcPath, fileNames, distPath, distFileName) => {
  var entries = fileNames.map((fileName) => `${srcPath}/${fileName}`);
  return gulp.src(entries)
  .pipe(concat(distFileName))
  .pipe(rename({
    extname: '.concat.css'
  }))
  .pipe(gulp.dest(distPath))
}
