//
// ウェブサイトをビルドするための設定や環境情報を読み込み、環境を準備して返します。
//
// Usage:
  //  const appEnv = require(`${process.cwd()}/website_env`)('example/config.js');
//  const config = appEnv.config;
//
// build出力先のbuildPathと成果物出力先のdistPathのフォルダが存在しない場合は新しくフォルダを作成します。
//
const file_copy = require(`${__dirname}/utils/file_copy`);
const http_server = require(`${__dirname}/utils/http_server`);
const mkdir = require(`${__dirname}/utils/mkdir`);
const load_config = require(`${__dirname}/utils/load_config`);
//
// configAbsolutePathに設定ファイルのパスをプロジェクトからの相対パスで指定します。
//
module.exports = (configAbsolutePath) => {
  const config = load_config(configAbsolutePath);
  mkdir(config.buildPath);
  mkdir(config.distPath);
  return {
    config: config,
    task: (task) => require(`${__dirname}/tasks/${task}`)(config),
    copy: (from, to, newFileName) => file_copy(from, to, newFileName),
    httpserver: () => http_server(config)
  }
}
