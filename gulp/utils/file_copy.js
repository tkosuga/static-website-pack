const gulp = require('gulp');
const rename = require('gulp-rename');
//
// fromからtoへファイルをコピーします。newFileNameの指定がなければ同名でコピーをします。
//
module.exports = (from, to, newFileName) => {
  if (typeof newFileName === "undefined" || newFileName === null) {
    return gulp.src(from).pipe(gulp.dest(to));
  } else {
    return gulp.src(from).pipe(rename(newFileName)).pipe(gulp.dest(to));
  }
}
