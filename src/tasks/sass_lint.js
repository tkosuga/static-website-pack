const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');

//
// sassDirectoryPath以下のsass or scssファイルにsasslintを実行しコンソールに出力します。
// see: https://github.com/sasstools/gulp-sass-lint
//
module.exports = (config) => () => {
  return gulp.src(`${config.sassDirectoryPath}/**.s+(a|c)ss`)
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError());
};
