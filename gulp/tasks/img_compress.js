const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

//
// imagesDirectoryName以下の画像ファイルの最適化を一括で行いbuildPath/imagesDirectoryNameに出力します。
// 画像フォーマットや指定できるオプションについてはimageminを参照して下さい。
//
// see: https://github.com/sindresorhus/gulp-imagemin
// see: https://github.com/imagemin/imagemin
//
module.exports = (config) =>() => {
  return gulp.src([`${config.img.directoryPath}/**`])
  .pipe(imagemin({
    progressive: true,
    arithmetic: true,
    verbose: true
  }))
  .pipe(gulp.dest(`${config.buildPath}/${config.img.directoryName}`))
};
