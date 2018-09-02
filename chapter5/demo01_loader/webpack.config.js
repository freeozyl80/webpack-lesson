var path = require('path')
module.exports = {
    devtool: 'none',
    mode:'development',
    module: {
        rules: [
            {
                test: /\.jsonp$/,
                use: [
                  {
                    loader: path.resolve('./loader.js'),
                    options: {
                        'cbname': 'callback'
                    }
                  }
                ]
            }
        ]
      }
  }