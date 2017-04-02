const gulp = require('gulp');
const rename = require('gulp-rename');
const touch = require('gulp-touch');
const ejs = require('gulp-ejs');
//
// ejsDirectoryPath/以下のejsファイルをhtmlファイルにコンパイルします。
// _から始まるパーシャルファイルをコンパイル対象から除外します。
//
module.exports = (config) => () => {
  return gulp.src([`${config.ejsDirectoryPath}/**.ejs`, `!${config.ejsDirectoryPath}/_*.ejs`])
  .pipe(touch())
  .pipe(ejs({
    buildEnv: process.env.BUILD_ENV
  })
  .on('error', function(e) {
    console.log(e.message);
    this.emit("end");
  }))
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(gulp.dest(config.buildPath));
};
