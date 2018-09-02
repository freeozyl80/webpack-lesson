const string = "hello World";

class WebpackString {
    constructor(string) {
        this.text = string
    }
    get content() {
        return this.toString()
    }
    set content(value) {
        console.log('already give value')
    }
    toString() {
        return this.text + '!'
    }
}

let exampleString = new WebpackString('Hello World');
exampleString.content = 'Hello Webpack';
console.log(exampleString.content);


