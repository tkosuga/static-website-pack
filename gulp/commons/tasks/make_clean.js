const del = require('del');
//
// `make clean` を行うスクリプトです。
// 中間生成物のbuildPath以下およびdistPath以下の全ファイルを削除します。
//
module.exports = (config) => () => del([`${config.buildPath}/*`, `${config.distPath}/*`])
