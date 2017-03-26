/*
 * `make clean` を行うスクリプトです。
 * buildPath以下とdistPath以下の全てのファイルを削除します。
 */
const del = require('del');

module.exports = (buildPath, distPath) => {
  del([`${buildPath}/*`, `${distPath}/*`])
}
