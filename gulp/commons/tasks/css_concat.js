const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
//
// 複数のcssファイルを1つのcssファイルに結合し、dist.cssFileNameで指定したファイル名でbuildPath以下に出力します。
// 結合後のcssファイルの拡張子はconcat.cssになり、dist.cssFileNameで指定した拡張子が利用されない点に注意して下さい。
//
// 例: a.sass.css, b.sass.css --(dist.cssFileName: app.css)--> app.concat.css
//
module.exports = (config) => () => {
  var entries = config.concat.cssFileNames.map((fileName) => `${config.buildPath}/${fileName}`);
  return gulp.src(entries)
  .pipe(concat(config.dist.cssFileName))
  .pipe(rename({
    extname: '.concat.css'
  }))
  .pipe(gulp.dest(config.buildPath))
}
