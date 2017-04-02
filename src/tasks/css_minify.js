const gulp = require('gulp');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
//
// 拡張子がcssのファイルをminifyします。
// minifyされたCSSに拡張子min.cssを付けてbuildPath以下に保存します。
//
// 例: buildPath/app.css --(minified)--> buildPath/app.min.css
//
// see: https://www.npmjs.com/package/clean-css
//
module.exports = (config) => () => {
  return gulp.src([`${config.buildPath}/**.css`, `!${config.buildPath}/**.min.css`])
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(gulp.dest(config.buildPath))
}
