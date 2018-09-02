module.exports = function(source) {
    var source = JSON.stringify(source);
    return `module.exports = ${source}`;
};