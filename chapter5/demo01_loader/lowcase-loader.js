module.exports = function(source) {
    var upOrlow = require('./caseType.js')
    this.cacheable(false);
    var value;
    if (upOrlow == 'low') {
        value = source.toLowerCase();
    } else if (upOrlow == 'up'){
        value = source.toUpperCase();
    }
    return `module.exports = ${value}`;
};