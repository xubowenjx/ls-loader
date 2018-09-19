const loaderUtils = require('loader-utils')
module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  console.log(options)
  console.log(source)
  this.cacheable()

  let newSource = source

  return newSource
}
