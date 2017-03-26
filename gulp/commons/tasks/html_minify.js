const gulp = require('gulp');
const rename = require('gulp-rename');
const minify = require('gulp-html-minifier');

//
// 拡張子がhtmlになっているファイルをminifyします。
// minifyされたHTMLに拡張子min.htmlを付けてbuildPath以下に保存します。
//
// 例: buildPath/app.html --(minified)--> buildPath/app.min.html
//
// see: https://www.npmjs.com/package/gulp-html-minifier
// see: https://github.com/kangax/html-minifier
//
module.exports = (config) => () => {
  return gulp.src([`${config.buildPath}/**.html`, `!${config.buildPath}/**.min.html`])
  .pipe(minify({
    collapseWhitespace: true,
    includeAutoGeneratedTags: false,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeEmptyAttributes: true
  }))
  .on('error', (e) => {
    console.error(e.toString());
    this.emit("end");
  })
  .pipe(rename({
    extname: '.min.html'
  }))
  .pipe(gulp.dest(config.buildPath))
}
