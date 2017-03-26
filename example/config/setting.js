module.exports = () => {
  const configs = {
    srcPath: `${process.cwd()}/example/src`,
    buildPath: `${process.cwd()}/example/build`,
    distPath: `${process.cwd()}/example/dist`,
    ejsDirectoryName: 'ejs',
    sassDirectoryName: 'sass',
    htmlDirectoryName: '',
    jsDirectoryName: '',
    cssDirectoryName: '',
    es: {
      directoryName: 'es',
      compiledFileName: 'index.es.js',
      entryFileNames: ['index.js']
    },
    img: {
      directoryName: 'img',
    },
    concat: {
      jsFileNames: ['index.es.js'],
      cssFileNames: ['index.sass.css'],
    },
    dist: {
      htmlFileName: 'index.html',
      jsFileName: 'index.js',
      cssFileName: 'index.css'
    }
  };
  return Object.assign(configs, {
    ejsDirectoryPath: `${configs.srcPath}/${configs.ejsDirectoryName}`,
    sassDirectoryPath: `${configs.srcPath}/${configs.sassDirectoryName}`,
    es: Object.assign(configs.es, {
      directoryPath: `${configs.srcPath}/${configs.es.directoryName}`,
    }),
    img: Object.assign(configs.img, {
      directoryPath: `${configs.srcPath}/${configs.img.directoryName}`,
    })
  })
}
