const fs = require('fs');
const mkdirp = require('mkdirp');
//
// 指定したパスのフォルダが無ければ新しく作成します。
//
module.exports = (path) => {
  if (!fs.existsSync(path)){
    mkdirp.sync(path);
    console.log(`Path ${path} created.`);
  }
}
