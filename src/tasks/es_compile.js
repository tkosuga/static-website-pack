const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
//
// es6で書かれたjsファイルをブラウザで利用できるjsファイルにコンパイルしてbuildPath以下に出力します。
// 出力するファイル名にconfig.es.compiledFileNameを利用します。
//
// エントリーファイルが複数ある場合はconfig.es.entryFileNamesに配列で複数ファイル名を指定します。
// 1ファイルの場合はconfig.es.entryFileNamesに配列でファイル名を1つ指定します。
//
// see: https://www.npmjs.com/package/browserify
//
module.exports = (config) => () => {
  var entries = config.es.entryFileNames.map((fileName) => `${config.es.directoryPath}/${fileName}`);
  return browserify({
    entries: entries,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  })
  .bundle()
  .on('error', function(e) {
    console.log("Error : " + e.message);
    this.emit("end");
  })
  .pipe(source(config.es.compiledFileName))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest(config.buildPath));
}
