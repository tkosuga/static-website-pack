'use strict';

const appEnv = require(`${process.cwd()}/gulp/commons/app_env`)('exsample/dist/home.config.js');
const config = appEnv.config;

const gulp = require('gulp');
const rename = require("gulp-rename");

gulp.task('ejs:compile', (callback) => appEnv.task('ejs_compile')(config.ejsDirectoryPath, config.buildPath));
gulp.task('ejs:watch', (callback) => appEnv.task('ejs_watch')(config.ejsDirectoryPath));

gulp.task('sass:lint', (callback) => appEnv.task('sass_lint')(config.sassDirectoryPath));
gulp.task('sass:compile', (callback) => appEnv.task('sass_compile')(config.sassDirectoryPath, config.buildPath));
gulp.task('sass:watch', (callback) => appEnv.task('sass_watch')(config.sassDirectoryPath));

gulp.task('es:lint', (callback) => appEnv.task('es_lint')(config.esDirectoryPath));
gulp.task('es:compile', (callback) => appEnv.task('es_compile')(config.esDirectoryPath, config.esEntryFileNames, config.buildPath, config.esCompiledFileName));
gulp.task('es:watch', (callback) => appEnv.task('es_watch')(config.esDirectoryPath));

gulp.task('img:compress', (callback) => appEnv.task('img_compress')(config.imagesDirectoryPath, `${config.buildPath}/${config.imagesDirectoryName}`));

gulp.task('html:minify', (callback) => appEnv.task('html_minify')(config.buildPath));

gulp.task('css:concat', (callback) => appEnv.task('css_concat')(config.buildPath, config.cssFileNames, config.buildPath, config.cssFileName));
gulp.task('css:minify', (callback) => appEnv.task('css_minify')(config.buildPath));

gulp.task('js:concat', (callback) => appEnv.task('js_concat')(config.buildPath, config.jsFileNames, config.buildPath, config.jsFileName));
gulp.task('js:minify', (callback) => appEnv.task('js_minify')(config.buildPath));

gulp.task('make:precompile', (callback) => appEnv.task('make_precompile')(
  gulp.src(`${config.srcPath}/favicon.ico`).pipe(gulp.dest(config.buildPath)),
  gulp.src(`${config.srcPath}/robots.txt`).pipe(gulp.dest(config.buildPath))
));
gulp.task('make:compile', (callback) => appEnv.task('make_compile')('make:precompile', ['sass:compile', 'ejs:compile', 'es:compile'], callback));
gulp.task('make:build', (callback) => appEnv.task('make_build')('make:compile', 'img:compress', ['css:concat', 'js:concat'], ['html:minify', 'css:minify', 'js:minify'], callback));
gulp.task('make:dest', (callback) => appEnv.task('make_dest')(
  gulp.src(`${config.buildPath}/index.min.html`).pipe(rename(config.htmlFileName)).pipe(gulp.dest(config.distPath)),
  gulp.src(`${config.buildPath}/index.concat.min.css`).pipe(rename(config.cssFileName)).pipe(gulp.dest(config.distPath)),
  gulp.src(`${config.buildPath}/index.concat.min.js`).pipe(rename(config.jsFileName)).pipe(gulp.dest(config.distPath)),
  gulp.src(`${config.buildPath}/${config.imagesDirectoryName}/*`).pipe(gulp.dest(`${config.distPath}/${config.imagesDirectoryName}`)),
  gulp.src(`${config.buildPath}/favicon.ico`).pipe(gulp.dest(config.distPath)),
  gulp.src(`${config.buildPath}/robots.txt`).pipe(gulp.dest(config.distPath))
));
gulp.task('make:clean', (callback) => appEnv.task('make_clean')(config.buildPath, config.distPath));

gulp.task('watch', ['ejs:watch', 'sass:watch', 'es:watch'], () => {});
