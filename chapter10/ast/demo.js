var acorn = require("acorn")

var code = "let demo = 'This is Just Test'; let G = function() {}; G() // I love playing";
var ast = acorn.parse(code, {
	range: [0,100]
})

console.log(ast)