const gulp = require('gulp');

module.exports = (path) => {
  gulp.watch(`${path}/**.js`, ['es:compile']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
};
