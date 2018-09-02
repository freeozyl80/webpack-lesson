var runLoaders = require("loader-runner").runLoaders;
var fs = require('fs')
var path = require('path')

var root = path.resolve(__dirname);
runLoaders({
	resource: path.resolve(root, './file.txt'),
	loaders: [path.resolve(root, './loader.js')],
	context: { minimize: true },
	readResource: fs.readFile.bind(fs)
}, function(err, result) {
    console.log('err:', err)
    console.log('result:', result)
})