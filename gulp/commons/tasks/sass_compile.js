const gulp = require('gulp');
const rename = require('gulp-rename');
const touch = require('gulp-touch');
const sass = require('gulp-sass');

//
// sassDirectoryPath以下のsass or scssファイルをcssにコンパイルしてbuildPath以下に保存します。
// see: https://www.npmjs.com/package/gulp-sass
//
module.exports = (config) => () => {
  return gulp.src([`${config.sassDirectoryPath}/**.s+(a|c)ss`, `!${config.sassDirectoryPath}/**.sass.css`])
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(rename({
    extname: '.sass.css'
  }))
  .pipe(gulp.dest(config.buildPath));
};
