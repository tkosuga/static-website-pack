const gulp = require('gulp');
//
// ejsDirectoryPath/以下のejsファイルを更新タイミングでhtmlファイルにコンパイルします。
// ejs:compileタスクを呼び出します。
//
module.exports = (config) => () => {
  gulp.watch(`${config.ejsDirectoryPath}/**.ejs`, ['ejs:compile']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
};
