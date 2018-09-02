var loaderUtils = require('loader-utils')
module.exports = function(source) {
  var res = source;
  // 获取options
  options = loaderUtils.getOptions(this);
  res = res + '\r\n获取options:' + JSON.stringify(options);
  // parseQuery
  var url = '?searchParm=webpack&t=2018'
  res = res + '\r\nparseQuery:' + JSON.stringify(loaderUtils.parseQuery(url))
  // stringifyRequest
  res = res + '\r\nstringifyRequest:' + loaderUtils.stringifyRequest(this, "test")
  // urlToRequest
  var path = "~path/to/module.js:";
  res = res + '\r\nurlToRequest' +loaderUtils.urlToRequest(url);

  res = JSON.stringify(res);
  return `module.exports = ${res}`;
};