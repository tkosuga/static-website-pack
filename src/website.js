//
// ウェブサイトをビルドするための設定や環境情報を読み込み、環境を準備して返します。
//
// Usage:
//  const appEnv = require(`${process.cwd()}/website`)('example/config.js');
//  const config = appEnv.config;
//
// build出力先のbuildPathと成果物出力先のdistPathのフォルダが存在しない場合は新しくフォルダを作成します。
//
const file_copy = require(`${__dirname}/utils/file_copy`);
const httpserver = require(`${__dirname}/utils/httpserver`);
const mkdir = require(`${__dirname}/utils/mkdir`);
const setenv = require(`${__dirname}/utils/setenv`);
//
// configAbsolutePathに設定ファイルのパスをプロジェクトからの相対パスで指定します。
//
module.exports = (projectAbsolutePath) => {
  setenv(projectAbsolutePath);
  //
  // プロジェクト固有の設定情報を取得します。
  //
  const config = require(`${process.cwd()}/${projectAbsolutePath}/config.js`)();
  mkdir(config.buildPath);
  mkdir(config.distPath);
  return {
    config: config,
    task: (task) => require(`${__dirname}/tasks/${task}`)(config),
    copy: (from, to, newFileName) => file_copy(from, to, newFileName),
    httpserver: () => httpserver(config)
  }
}
