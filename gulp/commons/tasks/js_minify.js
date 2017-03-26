const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

//
// 拡張子がjsのファイルをminifyします。
// minifyされたjsに拡張子min.jsを付けてbuildPath以下に保存します。
//
// 例: buildPath/app.js --(minified)--> buildPath/app.min.js
//
// see: https://www.npmjs.com/package/gulp-uglify
// see: https://github.com/mishoo/UglifyJS2
//
module.exports = (config) => () => {
  return gulp.src([`${config.buildPath}/**.js`, `!${config.buildPath}/**.min.js`])
  .pipe(uglify({
    // use default setting.
  }))
  .on('error', (e) => {
    console.error(e.toString());
    this.emit("end");
  })
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(gulp.dest(config.buildPath))
}
