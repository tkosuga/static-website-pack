const iswin = require('iswin');
const childProcess = require('child_process');
//
// http-serverを起動します。
// developmentモードであれば buildPath でhttp-serverを起動します。ビルド中のものを確認するために利用します。
// それ以外であれば distPath でhttp-serverを起動します。本番にリリースするものを確認するために利用します。
//
module.exports = (config) => {
  let currentPath = (process.env.BUILD_ENV == 'development' ? config.buildPath : config.distPath);
  console.log(`build mode: ${process.env.BUILD_ENV}`);
  console.log(`webserver root path: ${currentPath}`);
  if (iswin()) {
    childProcess.spawn('cmd', ['/s', '/c', `${process.cwd()}\\node_modules\\.bin\\http-server`], {cwd: currentPath, stdio: 'inherit'});
  } else {
    childProcess.spawn('node_modules/.bin/http-server', [], {cwd: currentPath, stdio: 'inherit'});
  }
}
