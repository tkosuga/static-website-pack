const gulp = require('gulp');
const eslint = require('gulp-eslint');

//
// esDirectoryPath以下のjsファイルにeslintを実行した結果を標準出力に表示します。
// see: https://github.com/adametry/gulp-eslint
//
module.exports = (config) => () => {
  return gulp.src(`${config.es.directoryPath}/**.js`)
  .pipe(eslint({
		rules: {
			'my-custom-rule': 1,
			'strict': 2
		},
		globals: ['jQuery', '$'],
		envs: ['browser']
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
}
