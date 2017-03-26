'use strict';

const websiteEnv = require(`${process.cwd()}/gulp/commons/website_env`)('example');
const config = websiteEnv.config;

const gulp = require('gulp');

gulp.task('ejs:compile', (callback) => websiteEnv.task('ejs_compile')());
gulp.task('ejs:watch', (callback) => websiteEnv.task('ejs_watch')());

gulp.task('sass:lint', (callback) => websiteEnv.task('sass_lint')());
gulp.task('sass:compile', (callback) => websiteEnv.task('sass_compile')());
gulp.task('sass:watch', (callback) => websiteEnv.task('sass_watch')());

gulp.task('es:lint', (callback) => websiteEnv.task('es_lint')());
gulp.task('es:compile', (callback) => websiteEnv.task('es_compile')());
gulp.task('es:watch', (callback) => websiteEnv.task('es_watch')());

gulp.task('img:compress', (callback) => websiteEnv.task('img_compress')());

gulp.task('html:minify', (callback) => websiteEnv.task('html_minify')());

gulp.task('css:concat', (callback) => websiteEnv.task('css_concat')());
gulp.task('css:minify', (callback) => websiteEnv.task('css_minify')());

gulp.task('js:concat', (callback) => websiteEnv.task('js_concat')());
gulp.task('js:minify', (callback) => websiteEnv.task('js_minify')());

gulp.task('make:prebuild', (callback) => websiteEnv.task('make_prebuild')(
  websiteEnv.copy(`${config.srcPath}/.htaccess`, config.buildPath),
  websiteEnv.copy(`${config.srcPath}/favicon.ico`, config.buildPath),
  websiteEnv.copy(`${config.srcPath}/robots.txt`, config.buildPath)
));
gulp.task('make:compile', (callback) => websiteEnv.task('make_compile')(
  'make:prebuild',
  ['sass:compile', 'ejs:compile', 'es:compile'],
  callback
));
gulp.task('make:build', (callback) => websiteEnv.task('make_build')(
  'make:compile',
  'img:compress',
  ['css:concat', 'js:concat'],
  ['html:minify', 'css:minify', 'js:minify'],
  callback
));
gulp.task('make:dest', (callback) => websiteEnv.task('make_dest')(
  websiteEnv.copy(`${config.buildPath}/index.min.html`, config.distPath, config.dist.htmlFileName),
  websiteEnv.copy(`${config.buildPath}/index.concat.min.css`, config.distPath, config.dist.cssFileName),
  websiteEnv.copy(`${config.buildPath}/index.concat.min.js`, config.distPath, config.dist.jsFileName),
  websiteEnv.copy(`${config.buildPath}/${config.img.directoryName}/*`, `${config.distPath}/${config.img.directoryName}`),
  websiteEnv.copy(`${config.buildPath}/.htaccess`, config.distPath),
  websiteEnv.copy(`${config.buildPath}/favicon.ico`, config.distPath),
  websiteEnv.copy(`${config.buildPath}/robots.txt`, config.distPath)
));
gulp.task('make:clean', (callback) => websiteEnv.task('make_clean')());
gulp.task('make:all', (callback) => websiteEnv.task('make_all')('make:clean', 'make:build', 'make:dest', callback));

gulp.task('watch', ['ejs:watch', 'sass:watch', 'es:watch'], () => {});
gulp.task('httpserver', (callback) => websiteEnv.httpserver());
