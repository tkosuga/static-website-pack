const gulp = require('gulp');

//
// esDirectoryPath/以下のejsファイルを更新タイミングでhtmlファイルにコンパイルします。
// 'es:lint'と'es:compile'タスクを呼び出します。
//
module.exports = (config) => () => {
  gulp.watch(`${config.es.directoryPath}/**.js`, ['es:lint', 'es:compile']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
};
