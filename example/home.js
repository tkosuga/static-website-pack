'use strict';

const website = require(`${__dirname}/../src/website`)('example');
const config = website.config;

const gulp = require('gulp');

gulp.task('ejs:compile', (callback) => website.task('ejs_compile')());
gulp.task('ejs:watch', (callback) => website.task('ejs_watch')());

gulp.task('sass:lint', (callback) => website.task('sass_lint')());
gulp.task('sass:compile', (callback) => website.task('sass_compile')());
gulp.task('sass:watch', (callback) => website.task('sass_watch')());

gulp.task('es:lint', (callback) => website.task('es_lint')());
gulp.task('es:compile', (callback) => website.task('es_compile')());
gulp.task('es:watch', (callback) => website.task('es_watch')());

gulp.task('img:compress', (callback) => website.task('img_compress')());

gulp.task('html:minify', (callback) => website.task('html_minify')());

gulp.task('css:concat', (callback) => website.task('css_concat')());
gulp.task('css:minify', (callback) => website.task('css_minify')());

gulp.task('js:concat', (callback) => website.task('js_concat')());
gulp.task('js:minify', (callback) => website.task('js_minify')());

gulp.task('make:prebuild', (callback) => website.task('make_prebuild')(
  website.copy(`${config.srcPath}/.htaccess`, config.buildPath),
  website.copy(`${config.srcPath}/favicon.ico`, config.buildPath),
  website.copy(`${config.srcPath}/robots.txt`, config.buildPath)
));
gulp.task('make:compile', (callback) => website.task('make_compile')(
  'make:prebuild',
  ['sass:compile', 'ejs:compile', 'es:compile'],
  callback
));
gulp.task('make:build', (callback) => website.task('make_build')(
  'make:compile',
  'img:compress',
  ['css:concat', 'js:concat'],
  ['html:minify', 'css:minify', 'js:minify'],
  callback
));
gulp.task('make:dist', (callback) => website.task('make_dist')(
  website.copy(`${config.buildPath}/index.min.html`, config.distPath, config.dist.htmlFileName),
  website.copy(`${config.buildPath}/index.concat.min.css`, config.distPath, config.dist.cssFileName),
  website.copy(`${config.buildPath}/index.concat.min.js`, config.distPath, config.dist.jsFileName),
  website.copy(`${config.buildPath}/${config.img.directoryName}/*`, `${config.distPath}/${config.img.directoryName}`),
  website.copy(`${config.buildPath}/.htaccess`, config.distPath),
  website.copy(`${config.buildPath}/favicon.ico`, config.distPath),
  website.copy(`${config.buildPath}/robots.txt`, config.distPath)
));
gulp.task('make:clean', (callback) => website.task('make_clean')());
gulp.task('make:all', (callback) => website.task('make_all')('make:clean', 'make:build', 'make:dist', callback));

gulp.task('watch', ['ejs:watch', 'sass:watch', 'es:watch'], () => {});
gulp.task('httpserver', (callback) => website.httpserver());
