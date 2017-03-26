const gulp = require('gulp');
const eslint = require('gulp-eslint');

module.exports = (path) => {
  return gulp.src(`${path}/**.js`)
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
