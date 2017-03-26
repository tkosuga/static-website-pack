const gulp = require('gulp');
const browserify = require("browserify");
const babelify = require("babelify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (srcPath, entryFileNames, distPath, distFileName) => {
  var entries = entryFileNames.map((fileName) => `${srcPath}/${fileName}`);
  return browserify({
    entries: entries,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true,
  }).transform(babelify, {
    sourceMaps: true,
    presets: ['es2015'],
    // compact: false
    // ignore: /(bower_components)|(node_modules)/,
  })
  .bundle()
  .on('error', function(e) {
    console.log("Error : " + e.message);
    this.emit("end");
  })
  .pipe(source(distFileName))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest(distPath));
}
