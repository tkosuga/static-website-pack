module.exports = () => {
  var configs = {
    srcPath: `${process.cwd()}/src/home`,
    buildPath: `${process.cwd()}/build/home`,
    distPath: `${process.cwd()}/dist/home`,

    ejsDirectoryName: 'ejs',
    sassDirectoryName: 'sass',
    esDirectoryName: 'es',
    imagesDirectoryName: 'images',

    htmlDirectoryName: '',
    jsDirectoryName: '',
    cssDirectoryName: '',

    esEntryFileNames: ['index.js'],
    esCompiledFileName: 'index.es.compiled.js',

    jsFileNames: ['index.es.compiled.js'],
    cssFileNames: ['index.sass.compiled.css'],

    htmlFileName: 'index.html',
    jsFileName: 'index.js',
    cssFileName: 'index.css'
  };
  return Object.assign(configs, {
    ejsDirectoryPath: `${configs.srcPath}/${configs.ejsDirectoryName}`,
    sassDirectoryPath: `${configs.srcPath}/${configs.sassDirectoryName}`,
    esDirectoryPath: `${configs.srcPath}/${configs.esDirectoryName}`,
    imagesDirectoryPath: `${configs.srcPath}/${configs.imagesDirectoryName}`
  })
}
