const merge = require('event-stream').merge;
//
// `make dest`または`make install`にあたる処理を同時に実行します。
//
module.exports = (config) => (args) => merge(args)
