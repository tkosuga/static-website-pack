const merge = require('event-stream').merge;

module.exports = (args) => {
  return merge(args);
}
