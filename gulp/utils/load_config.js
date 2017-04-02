const env = require('node-env-file');
const minimist = require('minimist');
//
// プロジェクト固有の設定情報を返します。
// 環境変数の設定を合わせて行います。
// configAbsolutePathに設定ファイルのパスをプロジェクトからの相対パスで指定します。
//
module.exports = (configAbsolutePath) => {
  const options = minimist(process.argv.slice(2), {
    string: 'env',
    default: {env: process.env.BUILD_ENV || 'development'}
  });
  process.env.BUILD_ENV = options.env;
  const configDirectoryPath = `${process.cwd()}/${configAbsolutePath}/config`;
  const config = require(`${configDirectoryPath}/setting.js`)();
  env(`${configDirectoryPath}/${process.env.BUILD_ENV}.env`);
  return config;
}
