var getOptions = require('loader-utils').getOptions

module.exports = function(source) {
    var options = getOptions(this);
    var cbname = options.cbname;
    var fnBody = 'return ' + source;
    var cb = new Function(cbname, fnBody);
    var value = cb(function(arg) {
        return arg;
    })
    value = typeof value === "string" ? JSON.parse(value) : value;
    value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
    return `module.exports = ${value}`;
};