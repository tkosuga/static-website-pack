//
// ウェブサイトをビルドするための設定や環境情報を読み込み、環境を準備して返します。
//
// Usage:
//  const appEnv = require(`${process.cwd()}/gulp/commons/website_env`)('example/config.js');
//  const config = appEnv.config;
//
// build出力先のbuildPathと成果物出力先のdistPathのフォルダが存在しない場合は新しくフォルダを作成します。
//
const fs = require('fs');
const mkdirp = require('mkdirp');
const gulp = require('gulp');
const rename = require('gulp-rename');
const env = require('node-env-file');
const minimist = require('minimist');
const childProcess = require('child_process');
const iswin = require("iswin");

const options = minimist(process.argv.slice(2), {
  string: 'env',
  default: {env: process.env.BUILD_ENV || 'development'}
});
process.env.BUILD_ENV = options.env;

//
// configAbsolutePathに設定ファイルのパスをプロジェクトからの相対パスで指定します。
//
module.exports = (configAbsolutePath) => {

  const configDirectoryPath = `${process.cwd()}/${configAbsolutePath}/config`;
  const config = require(`${configDirectoryPath}/setting.js`)();

  env(`${configDirectoryPath}/${process.env.BUILD_ENV}.env`);

  if (!fs.existsSync(config.buildPath)){
    mkdirp.sync(config.buildPath);
    console.log(`buildPath ${config.buildPath} created.`);
  }
  if (!fs.existsSync(config.distPath)){
    mkdirp.sync(config.distPath);
    console.log(`distPath ${config.distPath} created.`);
  }

  return {
    config: config,
    task: (task) => require(`${process.cwd()}/gulp/commons/tasks/${task}`)(config),
    copy: (from, to, newFileName) => {
      if (typeof newFileName === "undefined" || newFileName === null) {
        return gulp.src(from).pipe(gulp.dest(to));
      } else {
        return gulp.src(from).pipe(rename(newFileName)).pipe(gulp.dest(to));
      }
    },
    httpserver: () => {
      let currentPath = (process.env.BUILD_ENV != 'development' ? config.buildPath : config.distPath);
      if (iswin()) {
        childProcess.spawn('cmd', ['/s', '/c', `${process.cwd()}\\node_modules\\.bin\\http-server`], {cwd: currentPath, stdio: 'inherit'});
      } else {
        childProcess.spawn('node_modules/.bin/http-server', [], {cwd: currentPath, stdio: 'inherit'});
      }
    }
  }
}
