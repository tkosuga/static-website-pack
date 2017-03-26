const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = (srcPath, distPath) => {
  return gulp.src([`${srcPath}/**`])
    .pipe(imagemin({
      progressive: true,
      arithmetic: true,
      verbose: true
    }))
    .pipe(gulp.dest(distPath))
};
