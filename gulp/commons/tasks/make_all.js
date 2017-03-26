const runSequence = require('run-sequence');
//
// `make all`にあたる複数taskをrunSequenceを利用して連続実行します。
//
module.exports = (config) => (...args) => runSequence(...args)
