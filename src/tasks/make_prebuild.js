const merge = require('event-stream').merge;
//
// `make prebuild`にあたるcompileとbuildの事前処理を実行します。
//
module.exports = (config) => (args) => merge(args)
