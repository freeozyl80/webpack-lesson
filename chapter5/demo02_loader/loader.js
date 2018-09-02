var  path =  require ('path');
var  fs = require('fs');

module.exports = function(source) {
  this.cacheable(true);
  var callback = this.async();
  var headerPath = path.resolve('./file.txt');

  this.addDependency(headerPath);

  fs.readFile(headerPath, 'utf-8', function(err, header) {
    if(err) return callback(err);
    callback(null, header + "\n" + source);
  });
};