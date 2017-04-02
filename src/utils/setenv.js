const env = require('node-env-file');
const minimist = require('minimist');
//
// 環境変数の設定を行います。
// projectAbsolutePathに設定ファイルのパスをプロジェクトからの相対パスで指定します。
//
module.exports = (projectAbsolutePath) => {
  const options = minimist(process.argv.slice(2), {
    string: 'env',
    default: {env: process.env.BUILD_ENV || 'development'}
  });
  process.env.BUILD_ENV = options.env;
  env(`${process.cwd()}/${projectAbsolutePath}/env/${process.env.BUILD_ENV}.env`);
}
