const loaderUtils = require('loader-utils')
module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  //let prepath = options.prepath
  this.cacheable()
  let newSource = source
  var reg = /((\\)?\[.+\](\\)?\(.+\.(doc[x]?)(#.+)?\))/g
  newSource = newSource.replace(reg, function(arg1) {
    console.log(arg1)
    return arg1.replace(/\s+/g, '-').replace(/\\/g, '').replace(/doc[x]?/g, 'md')
  });

  return newSource
}
