var loaderUtils = require('loader-utils')
var validateOptions = require('schema-utils')
var schema = {
    "type": "object",
    "properties": {
        "param": {
            "type": "string"
        }
    },
    "additionalProperties": false
}
module.exports = function(source) {
    
  options = loaderUtils.getOptions(this);
  console.log(validateOptions(schema, options, './loader.js'))

  return `module.exports = ${JSON.stringify(source)}`;

};