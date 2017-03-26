const gulp = require('gulp');
const rename = require("gulp-rename");
const touch = require('gulp-touch');
const ejs = require('gulp-ejs');

module.exports = (srcPath, buildPath) => {
  return gulp.src([`${srcPath}/**.ejs`, `!${srcPath}/_*.ejs`]) // _から始まるパーシャルファイルを除外します。
    .pipe(touch())
    .pipe(ejs({
      buildMode: (process.env['BUILD_MODE'] ? process.env['BUILD_MODE'] : 'development')
    }).on('error', function(e) {
      console.log(e.message);
      this.emit("end");
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(buildPath));
};
