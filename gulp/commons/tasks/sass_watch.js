const gulp = require('gulp');

//
// sassDirectoryPath/以下のsass or scssファイルを更新タイミングでcssファイルにコンパイルします。
// 'sass:lint'と'sass:compile'タスクを呼び出します。
//
module.exports = (config) => () => {
  gulp.watch(`${config.sassDirectoryPath}/**.s+(a|c)ss`, ['sass:lint', 'sass:compile']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
};
