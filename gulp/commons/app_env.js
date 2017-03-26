module.exports = (absolutePath) => {
  return {
    config: require(`${process.cwd()}/${absolutePath}`)(),
    task: (task) => require(`${process.cwd()}/gulp/commons/tasks/${task}`)
  }
}
