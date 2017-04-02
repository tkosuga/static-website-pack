const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

//
// 複数のjsファイルを1つのjsファイルに結合し、dist.jsFileNameで指定したファイル名でbuildPath以下に出力します。
// 結合後のjsファイルの拡張子はconcat.jsになり、dist.jsFileNameで指定した拡張子が利用されない点に注意して下さい。
//
// 例: a.es.js, b.es.js --(dist.jsFileName: app.js)--> app.concat.js
//
module.exports = (config) => () => {
  var entries = config.concat.jsFileNames.map((fileName) => `${config.buildPath}/${fileName}`);
  return gulp.src(entries)
  .pipe(concat(config.dist.jsFileName))
  .pipe(rename({
    extname: '.concat.js'
  }))
  .pipe(gulp.dest(config.buildPath))
}
