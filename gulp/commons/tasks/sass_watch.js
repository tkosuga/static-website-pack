const gulp = require('gulp');

module.exports = (path) => {
  gulp.watch(`${path}/**.s+(a|c)ss`, ['sass:lint', 'sass:compile']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
};
